// components/comments/CommentThread.tsx
"use client";

import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	ThumbsUp,
	ThumbsDown,
	ChevronDown,
	EllipsisVertical,
	Pin,
	Trash2,
	Share2,
	Flag,
	Dot,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

interface User {
	id: string;
	username: string;
	avatarUrl: string;
}

interface CommentReaction {
	userId: string;
	type: "like" | "dislike";
}

interface Comment {
	id: string;
	user: User;
	content: string;
	createdAt: Date;
	updatedAt?: Date;
	isEdited: boolean;
	isPinned: boolean;
	replyToId?: string;
	replyToUser?: User;
	likes: CommentReaction[];
	dislikes: CommentReaction[];
	repliesCount: number;
	replies?: Comment[];
}

// ============================================================================
// UTILITIES
// ============================================================================

const getPluralForm = (num: number): string => {
	const mod10 = num % 10;
	const mod100 = num % 100;

	if (mod100 >= 11 && mod100 <= 19) return "";
	if (mod10 === 1) return "";
	if (mod10 >= 2 && mod10 <= 4) return "а";
	return "";
};

const formatTimeAgo = (date: Date): string => {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffMins = Math.floor(diffMs / 60000);
	const diffHours = Math.floor(diffMs / 3600000);
	const diffDays = Math.floor(diffMs / 86400000);

	if (diffMins < 1) return "только что";
	if (diffMins < 60)
		return `${diffMins} минут${getPluralForm(diffMins)} назад`;
	if (diffHours < 24)
		return `${diffHours} час${getPluralForm(diffHours)} назад`;
	if (diffDays < 7) return `${diffDays} день${getPluralForm(diffDays)} назад`;

	return date.toLocaleDateString("ru-RU");
};

// ============================================================================
// COMMENT HEADER
// ============================================================================

interface CommentHeaderProps {
	comment: Comment;
	isPinned?: boolean;
}

function CommentHeader({ comment, isPinned }: CommentHeaderProps) {
	const timeAgo = useMemo(
		() => formatTimeAgo(comment.createdAt),
		[comment.createdAt]
	);

	return (
		<div className="flex items-center gap-3">
			<Avatar className="size-6">
				<AvatarImage src={comment.user.avatarUrl} />
				<AvatarFallback>
					{comment.user.username.slice(0, 2)}
				</AvatarFallback>
			</Avatar>

			<div className="flex items-center gap-0.5">
				<span className="text-sm font-medium">
					{comment.user.username}
				</span>

				{isPinned && (
					<>
						<Dot className="size-4 text-muted-foreground" />
						<span className="text-xs text-muted-foreground">
							Закреплено
						</span>
					</>
				)}

				{comment.isEdited && (
					<>
						<Dot className="size-4 text-muted-foreground" />
						<span className="text-xs text-muted-foreground">
							(изменено)
						</span>
					</>
				)}

				<Dot className="size-4 text-muted-foreground" />
				<time className="text-sm text-muted-foreground">{timeAgo}</time>
			</div>
		</div>
	);
}

// ============================================================================
// COMMENT BODY
// ============================================================================

interface CommentBodyProps {
	comment: Comment;
	replyTo?: Comment;
}

function CommentBody({ comment, replyTo }: CommentBodyProps) {
	return (
		<div className="grid gap-3 text-sm">
			{replyTo && (
				<div className="text-xs text-muted-foreground">
					Ответ на{" "}
					<span className="font-semibold">
						@{replyTo.user.username}
					</span>
				</div>
			)}

			<p className="leading-relaxed">{comment.content}</p>
		</div>
	);
}

// ============================================================================
// COMMENT MENU
// ============================================================================

interface CommentMenuProps {
	comment: Comment;
	isOwner: boolean;
	onPin?: () => void;
	onDelete?: () => void;
	onShare?: () => void;
	onReport?: () => void;
}

function CommentMenu({
	comment,
	isOwner,
	onPin,
	onDelete,
	onShare,
	onReport,
}: CommentMenuProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon"
					variant="ghost"
					className="rounded-full h-7 w-7"
					aria-label="Меню комментария"
				>
					<EllipsisVertical className="size-4" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="min-w-48">
				{isOwner && (
					<>
						<DropdownMenuLabel>Мои действия</DropdownMenuLabel>

						<DropdownMenuItem onClick={onPin}>
							<Pin className="size-4 mr-2" />
							{comment.isPinned ? "Открепить" : "Закрепить"}
						</DropdownMenuItem>

						<DropdownMenuItem
							onClick={onDelete}
							className="text-destructive"
						>
							<Trash2 className="size-4 mr-2" />
							Удалить
						</DropdownMenuItem>

						<DropdownMenuSeparator />
					</>
				)}

				<DropdownMenuItem onClick={onShare}>
					<Share2 className="size-4 mr-2" />
					Поделиться
				</DropdownMenuItem>

				{!isOwner && (
					<DropdownMenuItem
						onClick={onReport}
						className="text-destructive"
					>
						<Flag className="size-4 mr-2" />
						Пожаловаться
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

// ============================================================================
// COMMENT ACTIONS
// ============================================================================

interface CommentActionsProps {
	comment: Comment;
	onReplyClick: () => void;
	onLike: (commentId: string) => void;
	onDislike: (commentId: string) => void;
	currentUserId: string;
	repliesOpen?: boolean;
}

function CommentActions({
	comment,
	onReplyClick,
	onLike,
	onDislike,
	currentUserId,
	repliesOpen = false,
}: CommentActionsProps) {
	const userLiked = comment.likes.some((r) => r.userId === currentUserId);
	const userDisliked = comment.dislikes.some(
		(r) => r.userId === currentUserId
	);

	const likeUsers = comment.likes.slice(0, 3);
	const moreUsers = comment.likes.length - 3;

	return (
		<div className="flex items-center gap-2 pt-2">
			{/* Reactions */}
			<div className="flex gap-1">
				<Toggle
					pressed={userLiked}
					onPressedChange={() => onLike(comment.id)}
					size="sm"
					className="h-7 rounded-full px-2 data-[state=on]:bg-primary data-[state=on]:text-secondary"
				>
					<ThumbsUp className="size-4" />
					{comment.likes.length > 0 && (
						<span className="ml-1">{comment.likes.length}</span>
					)}
				</Toggle>

				<Toggle
					pressed={userDisliked}
					onPressedChange={() => onDislike(comment.id)}
					size="sm"
					className="h-7 rounded-full px-2 data-[state=on]:bg-destructive data-[state=on]:text-destructive-foreground"
				>
					<ThumbsDown className="size-4" />
					{comment.dislikes.length > 0 && (
						<span className="ml-1">{comment.dislikes.length}</span>
					)}
				</Toggle>
			</div>

			{/* Liked by avatars */}
			{likeUsers.length > 0 && (
				<div className="flex -space-x-3 ml-2">
					{likeUsers.map((like) => (
						<Tooltip key={like.userId}>
							<TooltipTrigger asChild>
								<Avatar className="size-6 ring-2 ring-background">
									<AvatarImage
										src={`https://api.example.com/avatar/${like.userId}`}
									/>
									<AvatarFallback>U</AvatarFallback>
								</Avatar>
							</TooltipTrigger>
							<TooltipContent>
								Пользователь {like.userId}
							</TooltipContent>
						</Tooltip>
					))}

					{moreUsers > 0 && (
						<div className="size-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
							+{moreUsers}
						</div>
					)}
				</div>
			)}

			{/* Replies button */}
			<div className="flex-1 flex justify-end">
				<Button
					variant="ghost"
					size="sm"
					className="rounded-full h-7"
					onClick={onReplyClick}
				>
					Ответы ({comment.repliesCount})
					<ChevronDown
						className={`size-4 transition-transform ${
							repliesOpen ? "rotate-180" : ""
						}`}
					/>
				</Button>
			</div>
		</div>
	);
}

// ============================================================================
// REPLIES LIST
// ============================================================================

interface RepliesListProps {
	parentCommentId: string;
	replies: Comment[];
	currentUserId: string;
	depth: number;
	onLike: (commentId: string) => void;
	onDislike: (commentId: string) => void;
	onPin: (commentId: string) => void;
	onDelete: (commentId: string) => void;
	onLoadMoreReplies: (parentId: string) => void;
}

function RepliesList({
	parentCommentId,
	replies,
	currentUserId,
	depth,
	onLike,
	onDislike,
	onPin,
	onDelete,
	onLoadMoreReplies,
}: RepliesListProps) {
	const [displayedCount, setDisplayedCount] = useState(3);
	const [isLoading, setIsLoading] = useState(false);

	const displayedReplies = replies.slice(0, displayedCount);
	const hasMore = replies.length > displayedCount;
	const remainingCount = replies.length - displayedCount;

	const handleLoadMore = async () => {
		setIsLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 300));
			onLoadMoreReplies(parentCommentId);
			setDisplayedCount((prev) => prev + 3);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="grid gap-3 pl-4 pt-3 border-l-2 border-muted">
			{displayedReplies.map((reply) => (
				<CommentItem
					key={reply.id}
					comment={reply}
					currentUserId={currentUserId}
					depth={depth + 1}
					onLike={onLike}
					onDislike={onDislike}
					onPin={onPin}
					onDelete={onDelete}
					onLoadMoreReplies={onLoadMoreReplies}
				/>
			))}

			{hasMore && (
				<Button
					variant="secondary"
					size="sm"
					onClick={handleLoadMore}
					disabled={isLoading}
					className="self-start"
				>
					{isLoading ? "Загрузка..." : `Ещё ${remainingCount}`}
				</Button>
			)}
		</div>
	);
}

// ============================================================================
// COMMENT ITEM
// ============================================================================

interface CommentItemProps {
	comment: Comment;
	replyTo?: Comment;
	currentUserId: string;
	depth?: number;
	onLike: (commentId: string) => void;
	onDislike: (commentId: string) => void;
	onPin: (commentId: string) => void;
	onDelete: (commentId: string) => void;
	onLoadMoreReplies: (parentId: string) => void;
}

function CommentItem({
	comment,
	replyTo,
	currentUserId,
	depth = 0,
	onLike,
	onDislike,
	onPin,
	onDelete,
	onLoadMoreReplies,
}: CommentItemProps) {
	const [repliesOpen, setRepliesOpen] = useState(false);
	const isOwner = comment.user.id === currentUserId;
	const maxDepth = 3;
	const canNest = depth < maxDepth;

	const handlePin = useCallback(() => {
		onPin(comment.id);
	}, [comment.id, onPin]);

	const handleDelete = useCallback(() => {
		onDelete(comment.id);
	}, [comment.id, onDelete]);

	const handleShare = useCallback(() => {
		const url = `${window.location.origin}?commentId=${comment.id}`;
		navigator.clipboard.writeText(url);
	}, [comment.id]);

	return (
		<div
			className={`grid gap-3 p-4 border rounded-lg ${
				depth > 0 ? "ml-4" : ""
			}`}
		>
			{/* Header with menu */}
			<div className="flex justify-between items-start">
				<CommentHeader comment={comment} isPinned={comment.isPinned} />
				<CommentMenu
					comment={comment}
					isOwner={isOwner}
					onPin={handlePin}
					onDelete={handleDelete}
					onShare={handleShare}
				/>
			</div>

			{/* Body */}
			<CommentBody comment={comment} replyTo={replyTo} />

			{/* Actions */}
			<CommentActions
				comment={comment}
				onReplyClick={() => setRepliesOpen(!repliesOpen)}
				onLike={onLike}
				onDislike={onDislike}
				currentUserId={currentUserId}
				repliesOpen={repliesOpen}
			/>

			{/* Replies */}
			{repliesOpen &&
				canNest &&
				comment.replies &&
				comment.replies.length > 0 && (
					<RepliesList
						parentCommentId={comment.id}
						replies={comment.replies}
						currentUserId={currentUserId}
						depth={depth}
						onLike={onLike}
						onDislike={onDislike}
						onPin={onPin}
						onDelete={onDelete}
						onLoadMoreReplies={onLoadMoreReplies}
					/>
				)}
		</div>
	);
}

// ============================================================================
// COMMENT THREAD (MAIN COMPONENT)
// ============================================================================

interface CommentThreadProps {
	postId: string;
	currentUserId: string;
	initialComments?: Comment[];
}

export function CommentThread({
	postId,
	currentUserId,
	initialComments = [],
}: CommentThreadProps) {
	const [comments, setComments] = useState<Comment[]>(initialComments);
	const [isLoading, setIsLoading] = useState(false);
	const [displayedCount, setDisplayedCount] = useState(10);
	const [hasMore, setHasMore] = useState(true);

	// Разделяем закреплённые и обычные комментарии
	const pinnedComments = useMemo(
		() => comments.filter((c) => c.isPinned && !c.replyToId),
		[comments]
	);

	const regularComments = useMemo(
		() => comments.filter((c) => !c.isPinned && !c.replyToId),
		[comments]
	);

	const displayedRegularComments = useMemo(
		() => regularComments.slice(0, displayedCount),
		[regularComments, displayedCount]
	);

	const hasMoreComments = regularComments.length > displayedCount;
	const remainingComments = regularComments.length - displayedCount;

	// ========================================================================
	// COMMENT ACTIONS
	// ========================================================================

	const likeComment = useCallback(
		(commentId: string) => {
			setComments((prev) =>
				prev.map((c) => {
					if (c.id === commentId) {
						const isLiked = c.likes.some(
							(r) => r.userId === currentUserId
						);
						return {
							...c,
							likes: isLiked
								? c.likes.filter(
										(r) => r.userId !== currentUserId
								  )
								: [
										...c.likes,
										{
											userId: currentUserId,
											type: "like" as const,
										},
								  ],
						};
					}
					return c;
				})
			);
		},
		[currentUserId]
	);

	const dislikeComment = useCallback(
		(commentId: string) => {
			setComments((prev) =>
				prev.map((c) => {
					if (c.id === commentId) {
						const isDisliked = c.dislikes.some(
							(r) => r.userId === currentUserId
						);
						return {
							...c,
							dislikes: isDisliked
								? c.dislikes.filter(
										(r) => r.userId !== currentUserId
								  )
								: [
										...c.dislikes,
										{
											userId: currentUserId,
											type: "dislike" as const,
										},
								  ],
						};
					}
					return c;
				})
			);
		},
		[currentUserId]
	);

	const pinComment = useCallback((commentId: string) => {
		setComments((prev) =>
			prev.map((c) =>
				c.id === commentId ? { ...c, isPinned: !c.isPinned } : c
			)
		);
	}, []);

	const deleteComment = useCallback((commentId: string) => {
		setComments((prev) => prev.filter((c) => c.id !== commentId));
	}, []);

	const loadMoreComments = useCallback(async () => {
		setIsLoading(true);
		try {
			// Имитация загрузки с API
			await new Promise((resolve) => setTimeout(resolve, 500));
			setDisplayedCount((prev) => prev + 10);

			// Если нет больше комментариев, устанавливаем hasMore в false
			if (regularComments.length <= displayedCount + 10) {
				setHasMore(false);
			}
		} finally {
			setIsLoading(false);
		}
	}, [regularComments.length, displayedCount]);

	const loadMoreReplies = useCallback((parentId: string) => {
		// Здесь можно добавить логику загрузки ответов с API
		setComments((prev) =>
			prev.map((c) =>
				c.id === parentId
					? { ...c, repliesCount: c.repliesCount + 3 }
					: c
			)
		);
	}, []);

	// ========================================================================
	// RENDER
	// ========================================================================

	return (
		<div className="grid gap-4 p-4">
			{/* Pinned comments */}
			{pinnedComments.length > 0 && (
				<div className="grid gap-3">
					{pinnedComments.map((comment) => (
						<div
							key={comment.id}
							className="border-l-4 border-yellow-500 pl-3"
						>
							<CommentItem
								comment={comment}
								currentUserId={currentUserId}
								onLike={likeComment}
								onDislike={dislikeComment}
								onPin={pinComment}
								onDelete={deleteComment}
								onLoadMoreReplies={loadMoreReplies}
							/>
						</div>
					))}
				</div>
			)}

			{/* Regular comments */}
			{displayedRegularComments.length > 0 && (
				<div className="grid gap-4">
					{displayedRegularComments.map((comment) => (
						<CommentItem
							key={comment.id}
							comment={comment}
							currentUserId={currentUserId}
							onLike={likeComment}
							onDislike={dislikeComment}
							onPin={pinComment}
							onDelete={deleteComment}
							onLoadMoreReplies={loadMoreReplies}
						/>
					))}
				</div>
			)}

			{/* Load more button */}
			{hasMoreComments && (
				<Button
					variant="outline"
					onClick={loadMoreComments}
					disabled={isLoading}
					className="w-full"
				>
					{isLoading ? "Загрузка..." : `Ещё ${remainingComments}`}
				</Button>
			)}

			{/* Empty state */}
			{comments.length === 0 && (
				<div className="text-center text-muted-foreground py-8">
					Комментариев пока нет
				</div>
			)}

			{/* No more comments */}
			{!hasMoreComments && displayedRegularComments.length > 0 && (
				<div className="text-center text-sm text-muted-foreground py-4">
					Все комментарии загружены
				</div>
			)}
		</div>
	);
}

// ============================================================================
// EXPORT DEFAULT
// ============================================================================

export default CommentThread;

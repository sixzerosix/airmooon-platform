// pages/comments-example.tsx
"use client";

import { useState } from "react";
import CommentThread from "@/components/app/comments/comment";
import {
	mockCommentsPreset,
	generateMockComments,
} from "@/components/app/comments/mockData";

export default function CommentsExamplePage() {
	const [selectedDataSet, setSelectedDataSet] = useState<
		"preset" | "generated"
	>("preset");

	const comments =
		selectedDataSet === "preset"
			? mockCommentsPreset
			: generateMockComments(20);
	const currentUserId = "1"; // Текущий пользователь

	return (
		<div className="container mx-auto py-8">
			<div className="mb-6 flex gap-4">
				<button
					onClick={() => setSelectedDataSet("preset")}
					className={`px-4 py-2 rounded-lg font-medium transition-colors ${
						selectedDataSet === "preset"
							? "bg-primary text-primary-foreground"
							: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
					}`}
				>
					Готовые комментарии
				</button>
				<button
					onClick={() => setSelectedDataSet("generated")}
					className={`px-4 py-2 rounded-lg font-medium transition-colors ${
						selectedDataSet === "generated"
							? "bg-primary text-primary-foreground"
							: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
					}`}
				>
					Сгенерированные
				</button>
			</div>

			<div className="space-y-2 mb-6">
				<h1 className="text-3xl font-bold">Система комментариев</h1>
				<p className="text-muted-foreground">
					{selectedDataSet === "preset"
						? `Готовые комментарии (${mockCommentsPreset.length} шт.)`
						: `Сгенерированные комментарии (${
								generateMockComments(20).length
						  } шт.)`}
				</p>
			</div>

			<CommentThread
				postId="test-post-1"
				currentUserId={currentUserId}
				initialComments={comments}
			/>
		</div>
	);
}

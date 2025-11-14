// utils/mockData.ts

import { Comment, User } from '@/types/comment';

// ============================================================================
// MOCK USERS
// ============================================================================

export const mockUsers: User[] = [
	{
		id: '1',
		username: 'Heldor Helgason',
		avatarUrl: 'https://github.com/evilrabbit.png',
	},
	{
		id: '2',
		username: 'Superman',
		avatarUrl: 'https://github.com/shadcn.png',
	},
	{
		id: '3',
		username: 'Alex Johnson',
		avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
	},
	{
		id: '4',
		username: 'Maria Garcia',
		avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
	},
	{
		id: '5',
		username: 'John Developer',
		avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
	},
	{
		id: '6',
		username: 'Sarah Code',
		avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
	},
	{
		id: '7',
		username: 'Mike Tech',
		avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
	},
	{
		id: '8',
		username: 'Emma Design',
		avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
	},
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const getRandomUser = (): User => {
	return mockUsers[Math.floor(Math.random() * mockUsers.length)];
};

const getRandomDate = (daysAgo: number = 7): Date => {
	const now = new Date();
	const randomDays = Math.floor(Math.random() * daysAgo);
	const randomHours = Math.floor(Math.random() * 24);
	const randomMinutes = Math.floor(Math.random() * 60);

	return new Date(now.getTime() - randomDays * 24 * 60 * 60 * 1000 - randomHours * 60 * 60 * 1000 - randomMinutes * 60 * 1000);
};

const getRandomLikes = (): number => {
	return Math.floor(Math.random() * 15);
};

const getRandomDislikes = (): number => {
	return Math.floor(Math.random() * 5);
};

const generateReactions = (count: number, userIds: string[]): any[] => {
	const reactions = [];
	for (let i = 0; i < Math.min(count, 3); i++) {
		reactions.push({
			userId: userIds[Math.floor(Math.random() * userIds.length)],
			type: 'like' as const,
		});
	}
	return reactions;
};

// ============================================================================
// MOCK COMMENTS DATA
// ============================================================================

export const mockCommentTexts = {
	main: [
		'Очевидно, мы столкнулись с переобучением. Необходимо немедленно усилить регуляризацию (Dropout), снизить количество слоев и, что более важно, расширить набор признаков (features), добавив макроэкономические индикаторы, чтобы модель научилась обобщать, а не просто запоминать шум.',
		'Отличная работа! Ваш подход к архитектуре компонентов очень понравился. Особенно нравится как вы разделили ответственность между хуками и компонентами.',
		'Согласен с предыдущим комментарием. Нужно обязательно добавить кеширование результатов, чтобы улучшить производительность при большом количестве комментариев.',
		'А что если использовать виртуализацию списка? Это значительно улучшит производительность при работе с тысячами комментариев.',
		'Спасибо за подробное объяснение! Теперь я лучше понимаю как работает ленивая загрузка. Обязательно применю это в своём проекте.',
		'Интересный подход! Но я бы предложил использовать Web Workers для обработки больших объёмов данных. Это поможет избежать блокировки UI потока.',
		'Отличный пример! Особенно полезно было узнать о правильной организации типов и интерфейсов. Это делает код намного более поддерживаемым.',
		'Согласен, что это хорошая архитектура. Однако, я бы рекомендовал добавить обработку ошибок и retry логику для API запросов.',
	],
	replies: [
		'Спасибо за уточнение! Я об этом не подумал.',
		'Хорошая идея, попробую применить это.',
		'Согласен полностью! Это очень важно.',
		'Да, точно! Я тоже заметил эту проблему.',
		'Благодарю за совет! Обязательно учту.',
		'Интересный подход, но может быть сложновато для реализации?',
		'Спасибо, очень полезная информация!',
		'Согласен, это было бы идеально.',
		'Отличное предложение, спасибо!',
		'Я тоже об этом думал, но не знал как реализовать.',
	],
};

// ============================================================================
// GENERATE MOCK REPLIES
// ============================================================================

const generateMockReplies = (count: number, parentComment: Comment): Comment[] => {
	const replies: Comment[] = [];
	const userIds = mockUsers.map(u => u.id);

	for (let i = 0; i < count; i++) {
		const user = getRandomUser();
		const randomReplyText = mockCommentTexts.replies[
			Math.floor(Math.random() * mockCommentTexts.replies.length)
		];
		const likesCount = getRandomLikes();
		const dislikesCount = getRandomDislikes();

		replies.push({
			id: `reply-${parentComment.id}-${i}`,
			user,
			content: randomReplyText,
			createdAt: getRandomDate(3),
			isEdited: Math.random() > 0.8,
			isPinned: false,
			replyToId: parentComment.id,
			replyToUser: parentComment.user,
			likes: generateReactions(likesCount, userIds),
			dislikes: generateReactions(dislikesCount, userIds),
			repliesCount: 0,
			replies: [],
		});
	}

	return replies;
};

// ============================================================================
// GENERATE MOCK COMMENTS
// ============================================================================

export const generateMockComments = (count: number = 15): Comment[] => {
	const comments: Comment[] = [];
	const userIds = mockUsers.map(u => u.id);

	for (let i = 0; i < count; i++) {
		const user = getRandomUser();
		const randomText = mockCommentTexts.main[
			Math.floor(Math.random() * mockCommentTexts.main.length)
		];
		const likesCount = getRandomLikes();
		const dislikesCount = getRandomDislikes();
		const repliesCount = Math.floor(Math.random() * 8);

		const comment: Comment = {
			id: `comment-${i}`,
			user,
			content: randomText,
			createdAt: getRandomDate(7),
			isEdited: Math.random() > 0.85,
			isPinned: i === 0 || i === 1 ? Math.random() > 0.7 : false, // 30% шанс закрепления для первых двух
			replyToId: undefined,
			likes: generateReactions(likesCount, userIds),
			dislikes: generateReactions(dislikesCount, userIds),
			repliesCount,
			replies: generateMockReplies(Math.min(repliesCount, 5), { id: `comment-${i}` } as Comment),
		};

		comments.push(comment);
	}

	return comments;
};

// ============================================================================
// PRESET MOCK DATA
// ============================================================================

export const mockCommentsPreset: Comment[] = [
	// Закреплённый комментарий
	{
		id: 'comment-pinned-1',
		user: mockUsers[0],
		content: 'Очевидно, мы столкнулись с переобучением. Необходимо немедленно усилить регуляризацию (Dropout), снизить количество слоев и, что более важно, расширить набор признаков (features), добавив макроэкономические индикаторы, чтобы модель научилась обобщать, а не просто запоминать шум.',
		createdAt: new Date(Date.now() - 5 * 60 * 1000), // 5 минут назад
		isEdited: false,
		isPinned: true,
		likes: [
			{ userId: mockUsers[1].id, type: 'like' as const },
			{ userId: mockUsers[2].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 3,
		replies: [
			{
				id: 'reply-pinned-1-1',
				user: mockUsers[1],
				content: 'Спасибо за уточнение! Я об этом не подумал.',
				createdAt: new Date(Date.now() - 4 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-pinned-1',
				replyToUser: mockUsers[0],
				likes: [{ userId: mockUsers[2].id, type: 'like' as const }],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-pinned-1-2',
				user: mockUsers[2],
				content: 'Хорошая идея, попробую применить это.',
				createdAt: new Date(Date.now() - 3 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-pinned-1',
				replyToUser: mockUsers[0],
				likes: [],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-pinned-1-3',
				user: mockUsers[3],
				content: 'Согласен полностью! Это очень важно.',
				createdAt: new Date(Date.now() - 2 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-pinned-1',
				replyToUser: mockUsers[0],
				likes: [
					{ userId: mockUsers[4].id, type: 'like' as const },
					{ userId: mockUsers[5].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Обычный комментарий с ответами
	{
		id: 'comment-1',
		user: mockUsers[1],
		content: 'Отличная работа! Ваш подход к архитектуре компонентов очень понравился. Особенно нравится как вы разделили ответственность между хуками и компонентами.',
		createdAt: new Date(Date.now() - 15 * 60 * 1000), // 15 минут назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[2].id, type: 'like' as const },
			{ userId: mockUsers[3].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 2,
		replies: [
			{
				id: 'reply-1-1',
				user: mockUsers[2],
				content: 'Спасибо! Это результат долгого опыта работы с React.',
				createdAt: new Date(Date.now() - 12 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-1',
				replyToUser: mockUsers[1],
				likes: [{ userId: mockUsers[4].id, type: 'like' as const }],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-1-2',
				user: mockUsers[3],
				content: 'Согласен, очень чистая архитектура!',
				createdAt: new Date(Date.now() - 10 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-1',
				replyToUser: mockUsers[1],
				likes: [],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий с отредактированной пометкой
	{
		id: 'comment-2',
		user: mockUsers[2],
		content: 'Согласен с предыдущим комментарием. Нужно обязательно добавить кеширование результатов, чтобы улучшить производительность при большом количестве комментариев.',
		createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 минут назад
		isEdited: true,
		isPinned: false,
		likes: [
			{ userId: mockUsers[4].id, type: 'like' as const },
			{ userId: mockUsers[5].id, type: 'like' as const },
			{ userId: mockUsers[6].id, type: 'like' as const },
		],
		dislikes: [{ userId: mockUsers[7].id, type: 'dislike' as const }],
		repliesCount: 1,
		replies: [
			{
				id: 'reply-2-1',
				user: mockUsers[4],
				content: 'Отличное предложение! React Query отлично подходит для этого.',
				createdAt: new Date(Date.now() - 25 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-2',
				replyToUser: mockUsers[2],
				likes: [
					{ userId: mockUsers[5].id, type: 'like' as const },
					{ userId: mockUsers[6].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий без ответов
	{
		id: 'comment-3',
		user: mockUsers[3],
		content: 'А что если использовать виртуализацию списка? Это значительно улучшит производительность при работе с тысячами комментариев.',
		createdAt: new Date(Date.now() - 45 * 60 * 1000), // 45 минут назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[0].id, type: 'like' as const },
			{ userId: mockUsers[5].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 0,
		replies: [],
	},

	// Комментарий с большим количеством лайков
	{
		id: 'comment-4',
		user: mockUsers[4],
		content: 'Спасибо за подробное объяснение! Теперь я лучше понимаю как работает ленивая загрузка. Обязательно применю это в своём проекте.',
		createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 час назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[0].id, type: 'like' as const },
			{ userId: mockUsers[1].id, type: 'like' as const },
			{ userId: mockUsers[2].id, type: 'like' as const },
			{ userId: mockUsers[3].id, type: 'like' as const },
			{ userId: mockUsers[5].id, type: 'like' as const },
			{ userId: mockUsers[6].id, type: 'like' as const },
			{ userId: mockUsers[7].id, type: 'like' as const },
		],
		dislikes: [{ userId: mockUsers[2].id, type: 'dislike' as const }],
		repliesCount: 4,
		replies: [
			{
				id: 'reply-4-1',
				user: mockUsers[5],
				content: 'Рад, что помог! Если возникнут вопросы, я всегда готов помочь.',
				createdAt: new Date(Date.now() - 55 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-4',
				replyToUser: mockUsers[4],
				likes: [
					{ userId: mockUsers[0].id, type: 'like' as const },
					{ userId: mockUsers[4].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-4-2',
				user: mockUsers[6],
				content: 'У меня есть вопрос по поводу реализации...',
				createdAt: new Date(Date.now() - 50 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-4',
				replyToUser: mockUsers[4],
				likes: [{ userId: mockUsers[7].id, type: 'like' as const }],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-4-3',
				user: mockUsers[7],
				content: 'Спасибо за пример! Очень помогло разобраться.',
				createdAt: new Date(Date.now() - 48 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-4',
				replyToUser: mockUsers[4],
				likes: [
					{ userId: mockUsers[0].id, type: 'like' as const },
					{ userId: mockUsers[1].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-4-4',
				user: mockUsers[0],
				content: 'Я тоже применил это в своём проекте, результаты отличные!',
				createdAt: new Date(Date.now() - 40 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-4',
				replyToUser: mockUsers[4],
				likes: [
					{ userId: mockUsers[3].id, type: 'like' as const },
					{ userId: mockUsers[5].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий с дизлайками
	{
		id: 'comment-5',
		user: mockUsers[5],
		content: 'Интересный подход! Но я бы предложил использовать Web Workers для обработки больших объёмов данных. Это поможет избежать блокировки UI потока.',
		createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 часа назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[1].id, type: 'like' as const },
			{ userId: mockUsers[3].id, type: 'like' as const },
		],
		dislikes: [
			{ userId: mockUsers[2].id, type: 'dislike' as const },
			{ userId: mockUsers[7].id, type: 'dislike' as const },
			{ userId: mockUsers[4].id, type: 'dislike' as const },
		],
		repliesCount: 2,
		replies: [
			{
				id: 'reply-5-1',
				user: mockUsers[2],
				content: 'Слишком сложно для большинства случаев, по моему мнению.',
				createdAt: new Date(Date.now() - 110 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-5',
				replyToUser: mockUsers[5],
				likes: [{ userId: mockUsers[7].id, type: 'like' as const }],
				dislikes: [{ userId: mockUsers[5].id, type: 'dislike' as const }],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-5-2',
				user: mockUsers[3],
				content: 'Согласен, это хороший подход для high-load приложений.',
				createdAt: new Date(Date.now() - 100 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-5',
				replyToUser: mockUsers[5],
				likes: [
					{ userId: mockUsers[0].id, type: 'like' as const },
					{ userId: mockUsers[1].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий без ответов
	{
		id: 'comment-6',
		user: mockUsers[6],
		content: 'Отличный пример! Особенно полезно было узнать о правильной организации типов и интерфейсов. Это делает код намного более поддерживаемым.',
		createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 часа назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[0].id, type: 'like' as const },
			{ userId: mockUsers[4].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 0,
		replies: [],
	},

	// Комментарий с одним ответом
	{
		id: 'comment-7',
		user: mockUsers[7],
		content: 'Согласен, что это хорошая архитектура. Однако, я бы рекомендовал добавить обработку ошибок и retry логику для API запросов.',
		createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 часа назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[0].id, type: 'like' as const },
			{ userId: mockUsers[1].id, type: 'like' as const },
			{ userId: mockUsers[2].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 1,
		replies: [
			{
				id: 'reply-7-1',
				user: mockUsers[0],
				content: 'Отличное замечание! Я добавлю это в следующую версию.',
				createdAt: new Date(Date.now() - 3.5 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-7',
				replyToUser: mockUsers[7],
				likes: [
					{ userId: mockUsers[1].id, type: 'like' as const },
					{ userId: mockUsers[3].id, type: 'like' as const },
					{ userId: mockUsers[5].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий со сложным текстом
	{
		id: 'comment-8',
		user: mockUsers[1],
		content: 'Я предлагаю использовать следующий подход:\n1. Добавить кеширование на клиенте\n2. Использовать виртуализацию списка\n3. Оптимизировать re-renders\n4. Добавить пагинацию\n\nЭто должно значительно улучшить производительность!',
		createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 часов назад
		isEdited: true,
		isPinned: false,
		likes: [
			{ userId: mockUsers[2].id, type: 'like' as const },
			{ userId: mockUsers[4].id, type: 'like' as const },
			{ userId: mockUsers[6].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 3,
		replies: [
			{
				id: 'reply-8-1',
				user: mockUsers[2],
				content: 'Отличный план! Я согласен со всеми пунктами.',
				createdAt: new Date(Date.now() - 4.8 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-8',
				replyToUser: mockUsers[1],
				likes: [{ userId: mockUsers[4].id, type: 'like' as const }],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-8-2',
				user: mockUsers[3],
				content: 'Можно ещё добавить Service Worker для offline поддержки.',
				createdAt: new Date(Date.now() - 4.5 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-8',
				replyToUser: mockUsers[1],
				likes: [
					{ userId: mockUsers[0].id, type: 'like' as const },
					{ userId: mockUsers[1].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-8-3',
				user: mockUsers[5],
				content: 'Спасибо за детальный разбор! Очень полезно.',
				createdAt: new Date(Date.now() - 4.2 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-8',
				replyToUser: mockUsers[1],
				likes: [],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий без ответов
	{
		id: 'comment-9',
		user: mockUsers[3],
		content: 'Я использовал этот подход в своём проекте и результаты превзошли все мои ожидания. Performance улучшился в 3 раза!',
		createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 часов назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[0].id, type: 'like' as const },
			{ userId: mockUsers[1].id, type: 'like' as const },
			{ userId: mockUsers[2].id, type: 'like' as const },
			{ userId: mockUsers[4].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 0,
		replies: [],
	},

	// Комментарий с ответами
	{
		id: 'comment-10',
		user: mockUsers[4],
		content: 'Вопрос: как вы обрабатываете ошибки при загрузке комментариев? Есть ли retry логика?',
		createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 день назад
		isEdited: false,
		isPinned: false,
		likes: [{ userId: mockUsers[6].id, type: 'like' as const }],
		dislikes: [],
		repliesCount: 2,
		replies: [
			{
				id: 'reply-10-1',
				user: mockUsers[0],
				content: 'Отличный вопрос! Да, у нас есть exponential backoff retry логика.',
				createdAt: new Date(Date.now() - 0.9 * 24 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-10',
				replyToUser: mockUsers[4],
				likes: [
					{ userId: mockUsers[2].id, type: 'like' as const },
					{ userId: mockUsers[5].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-10-2',
				user: mockUsers[5],
				content: 'Можешь поделиться кодом? Было бы очень полезно.',
				createdAt: new Date(Date.now() - 0.8 * 24 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-10',
				replyToUser: mockUsers[4],
				likes: [{ userId: mockUsers[0].id, type: 'like' as const }],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий без ответов
	{
		id: 'comment-11',
		user: mockUsers[6],
		content: 'Спасибо за статью! Она помогла мне разобраться с архитектурой комментариев в моём приложении.',
		createdAt: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000), // 1.5 дня назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[0].id, type: 'like' as const },
			{ userId: mockUsers[3].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 0,
		replies: [],
	},

	// Комментарий с ответами
	{
		id: 'comment-12',
		user: mockUsers[7],
		content: 'А как вы решили проблему с синхронизацией состояния между несколькими компонентами?',
		createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 дня назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[1].id, type: 'like' as const },
			{ userId: mockUsers[2].id, type: 'like' as const },
		],
		dislikes: [{ userId: mockUsers[3].id, type: 'dislike' as const }],
		repliesCount: 2,
		replies: [
			{
				id: 'reply-12-1',
				user: mockUsers[1],
				content: 'Мы используем Zustand для управления глобальным состоянием. Это очень удобно!',
				createdAt: new Date(Date.now() - 1.9 * 24 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-12',
				replyToUser: mockUsers[7],
				likes: [
					{ userId: mockUsers[0].id, type: 'like' as const },
					{ userId: mockUsers[4].id, type: 'like' as const },
					{ userId: mockUsers[6].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-12-2',
				user: mockUsers[2],
				content: 'Zustand - отличный выбор! Я тоже его рекомендую.',
				createdAt: new Date(Date.now() - 1.8 * 24 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-12',
				replyToUser: mockUsers[7],
				likes: [{ userId: mockUsers[5].id, type: 'like' as const }],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий с отредактированной пометкой и ответами
	{
		id: 'comment-13',
		user: mockUsers[0],
		content: 'Не забывайте про доступность! Важно добавить ARIA атрибуты и обеспечить навигацию с клавиатуры.',
		createdAt: new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000), // 2.5 дня назад
		isEdited: true,
		isPinned: false,
		likes: [
			{ userId: mockUsers[1].id, type: 'like' as const },
			{ userId: mockUsers[3].id, type: 'like' as const },
			{ userId: mockUsers[5].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 1,
		replies: [
			{
				id: 'reply-13-1',
				user: mockUsers[1],
				content: 'Спасибо за напоминание! Это действительно важно. Я добавлю это в список задач.',
				createdAt: new Date(Date.now() - 2.4 * 24 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-13',
				replyToUser: mockUsers[0],
				likes: [
					{ userId: mockUsers[0].id, type: 'like' as const },
					{ userId: mockUsers[2].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
		],
	},

	// Комментарий без ответов
	{
		id: 'comment-14',
		user: mockUsers[2],
		content: 'Отличный материал! Буду ждать второй части про оптимизацию производительности.',
		createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 дня назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[0].id, type: 'like' as const },
			{ userId: mockUsers[4].id, type: 'like' as const },
			{ userId: mockUsers[6].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 0,
		replies: [],
	},

	// Комментарий с ответами
	{
		id: 'comment-15',
		user: mockUsers[3],
		content: 'Кто-нибудь использовал GraphQL вместо REST для загрузки комментариев? Интересны ваши впечатления.',
		createdAt: new Date(Date.now() - 3.5 * 24 * 60 * 60 * 1000), // 3.5 дня назад
		isEdited: false,
		isPinned: false,
		likes: [
			{ userId: mockUsers[0].id, type: 'like' as const },
			{ userId: mockUsers[1].id, type: 'like' as const },
			{ userId: mockUsers[5].id, type: 'like' as const },
			{ userId: mockUsers[7].id, type: 'like' as const },
		],
		dislikes: [],
		repliesCount: 3,
		replies: [
			{
				id: 'reply-15-1',
				user: mockUsers[4],
				content: 'Да, используем GraphQL. Очень удобно! Загружаем только нужные поля.',
				createdAt: new Date(Date.now() - 3.3 * 24 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-15',
				replyToUser: mockUsers[3],
				likes: [
					{ userId: mockUsers[0].id, type: 'like' as const },
					{ userId: mockUsers[2].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-15-2',
				user: mockUsers[5],
				content: 'GraphQL отлично работает! Но нужно хорошо оптимизировать queries.',
				createdAt: new Date(Date.now() - 3.2 * 24 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-15',
				replyToUser: mockUsers[3],
				likes: [
					{ userId: mockUsers[1].id, type: 'like' as const },
					{ userId: mockUsers[3].id, type: 'like' as const },
				],
				dislikes: [],
				repliesCount: 0,
				replies: [],
			},
			{
				id: 'reply-15-3',
				user: mockUsers[6],
				content: 'REST проще для начинающих, но GraphQL мощнее для сложных приложений.',
				createdAt: new Date(Date.now() - 3.1 * 24 * 60 * 60 * 1000),
				isEdited: false,
				isPinned: false,
				replyToId: 'comment-15',
				replyToUser: mockUsers[3],
				likes: [
					{ userId: mockUsers[0].id, type: 'like' as const },
					{ userId: mockUsers[4].id, type: 'like' as const },
				],
				dislikes: [{ userId: mockUsers[2].id, type: 'dislike' as const }],
				repliesCount: 0,
				replies: [],
			},
		],
	},
];

// ============================================================================
// EXPORT
// ============================================================================

export default mockCommentsPreset;




// SPDX-License-Identifier: MPL-2.0
export interface FriendLink {
  title: string;
  imgurl: string;
  desc: string;
  siteurl: string;
  tags?: string[];
  weight: number;
  enabled: boolean;
}

export const friendsPageConfig = {
  title: 'Friends',
  description: 'Links to sites I read and people I know.',
  showCustomContent: true,
  columns: 3,
};

export const friendsConfig: FriendLink[] = [
	{
		title: "夏夜流萤",
		imgurl:
			"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 10,
		enabled: true,
	},
	{
		title: "THW's Blog",
		imgurl: "https://image.tianhw.top/avatar.webp",
		desc: "前途似海，来日方长",
		siteurl: "https://tianhw.top",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Rebel Zhang 的个人网站",
		imgurl: "https://rebel1725.codeberg.page/assets/profile_light.svg",
		desc: "生活有起有落，但我依然热衷于尽可能充实地度过每一刻。",
		siteurl: "https://rebel1725.codeberg.page",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Ad_closeNN の Blog",
		imgurl: "https://adclosenn.top/assets/avatar.jpg",
		desc: "永远相信美好的事情即将发生",
		siteurl: "https://adclosenn.top",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "AcoFork Blog",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
		desc: "Protect What You Love.",
		siteurl: "https://blog.acofork.com",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "MC_Kero 的 blog",
		imgurl: "https://i0.hdslb.com/bfs/face/96a6399dffe9e203d3afcc83fe5af3377830fa19.png",
		desc: "依稀当年泪目干！",
		siteurl: "https://blog.mckero.com",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "LYEy_isine个人博客",
		siteurl: "https://caiyifeng.top",
		imgurl: "https://img.cdn1.vip/i/68bbdee513eb9_1757142757.webp",
		desc: "花海无一日,少年踏自来",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Elykia",
		siteurl: "https://blog.elykia.cn",
		imgurl: "https://bu.dusays.com/2024/10/25/671b2438203a6.gif",
		desc: "致以无暇之人",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "咖啡豆子coffee的小站",
		siteurl: "https://blog.kfdzcoffee.cn",
		imgurl: "https://images.kfdzcoffee.cn/i/1/avatar.png",
		desc: "所有奇迹的始发点",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Pinpe 的云端",
		siteurl: "https://pinpe.top",
		imgurl: "https://pinpe.top/head.jpg",
		desc: "一个属于自己的云朵。",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "星雪",
		siteurl: "https://snowtafir.top",
		imgurl: "https://snowtafir.top/img/avatar.webp",
		desc: "银光渐深星无灭，古杉月空探花雪。",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "LXJ Blog",
		siteurl: "https://lxj.rf.gd",
		imgurl: "http://lxj.rf.gd/wp-content/uploads/2025/01/1737869990-%E5%A4%B4%E5%83%8F%EF%BC%88%E6%89%A3%EF%BC%89.png",
		desc: "LXJ 的个人博客",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Jiwac's Blog",
		siteurl: "https://mukunjin.com",
		imgurl: "https://mukunjin.com/images/avatar.png",
		desc: "Everything finished with exit code 0.",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
];

export function getEnabledFriends(): FriendLink[] {
  return friendsConfig
    .filter((f) => f.enabled)
    .sort((a, b) => b.weight - a.weight);
}

export function getAllTags(friends: FriendLink[]): string[] {
  const set = new Set<string>();
  friends.forEach((f) => f.tags?.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
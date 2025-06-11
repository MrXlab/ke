// 创建Vue应用
const app = Vue.createApp({
    data() {
        return {
            currentPage: 'home',
            searchValue: '',
            activeTab: 0,
            userAvatar: 'https://placeholder.com/32',
            currentAgent: null,
            inputMessage: '',
            messages: [],
            agents: [
                {
                    id: 1,
                    name: 'AI助手',
                    avatar: 'https://placeholder.com/80',
                    description: '智能问答助手，可以回答各种问题',
                    users: 1000,
                    rating: 4.8
                },
                {
                    id: 2,
                    name: '翻译官',
                    avatar: 'https://placeholder.com/80',
                    description: '多语言翻译专家，支持多种语言互译',
                    users: 800,
                    rating: 4.7
                },
                {
                    id: 3,
                    name: '写作助手',
                    avatar: 'https://placeholder.com/80',
                    description: '专业的写作助手，帮你提升写作水平',
                    users: 600,
                    rating: 4.6
                },
                {
                    id: 4,
                    name: '编程助手',
                    avatar: 'https://placeholder.com/80',
                    description: '编程问题解答，代码优化建议',
                    users: 500,
                    rating: 4.9
                }
            ]
        }
    },
    methods: {
        // 进入对话页面
        enterChat(agent) {
            this.currentAgent = agent;
            this.currentPage = 'chat';
            this.messages = [
                {
                    type: 'agent',
                    content: `你好，我是${agent.name}，很高兴为你服务！`,
                    time: this.formatTime(new Date())
                }
            ];
        },
        // 返回首页
        backToHome() {
            this.currentPage = 'home';
        },
        // 发送消息
        sendMessage() {
            if (!this.inputMessage.trim()) return;
            
            // 添加用户消息
            this.messages.push({
                type: 'user',
                content: this.inputMessage,
                time: this.formatTime(new Date())
            });
            
            // 清空输入框
            this.inputMessage = '';
            
            // 模拟AI回复
            setTimeout(() => {
                this.messages.push({
                    type: 'agent',
                    content: '我收到了你的消息，正在处理中...',
                    time: this.formatTime(new Date())
                });
            }, 1000);
        },
        // 格式化时间
        formatTime(date) {
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        },
        // 进入功能区块后的跳转
        goTo(type) {
            let agent = null;
            if (type === 'openOpt') {
                agent = { name: '开篇优化', avatar: './assets/open.png' };
            } else if (type === 'hotTopic') {
                agent = { name: '爆款选题', avatar: './assets/hot.png' };
            } else if (type === 'original') {
                agent = { name: '原创文案', avatar: './assets/original.png' };
            }
            if (agent) {
                this.currentAgent = agent;
                this.currentPage = 'chat';
                this.messages = [
                    {
                        type: 'agent',
                        content: `你好，我是${agent.name}智能体，很高兴为你服务！`,
                        time: this.formatTime(new Date())
                    }
                ];
            }
        }
    },
    mounted() {
        // 初始化Vant
        app.use(vant);
    }
});

// 挂载应用
app.mount('#app'); 
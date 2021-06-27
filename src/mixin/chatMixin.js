const chatMixin = {
  data: () => ({
    receiveHandler: undefined,
    unsubscribeFunc: undefined
  }),
  methods: {
    $initreceiveChatMessageHandler(handler) {
      this.receiveHandler = handler;
      this.unsubscribeFunc = this.$store.subscribeAction((action, state) => {
        if (action.type === 'chat/receiveChatMessage') {
          this.receiveHandler({ action, state });
        }
      });
    }
  },
  beforeDestroyed() {
    this.unsubscribeFunc();
  }
};

export default chatMixin;

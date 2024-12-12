class DisableLogs {
    static originalConsole = { ...console };
  
    static disable() {
      console.log = () => {};
      console.info = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.debug = () => {};
    }
  
    static enable() {
      console.log = this.originalConsole.log;
      console.info = this.originalConsole.info;
      console.warn = this.originalConsole.warn;
      console.error = this.originalConsole.error;
      console.debug = this.originalConsole.debug;
    }
  }
  
  module.exports = DisableLogs;
  
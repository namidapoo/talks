import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $slidev: {
      nav: {
        currentPage: number;
        total: number;
        currentLayout: string;
      };
    };
  }
}

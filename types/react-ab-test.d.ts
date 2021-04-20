declare module '@marvelapp/react-ab-test' {
  declare const emitter: {
    defineVariants: (
      experiment: string,
      variants: string[],
      weights: number[]
    ) => void;
    emitWin: (name: string) => void;
    addPlayListener: (
      listener: (experimentName: string, variantName: string) => void
    ) => void;
    addWinListener: (
      listener: (experimentName: string, variantName: string) => void
    ) => void;
  }
  declare const experimentDebugger: {
    enable: () => void;
    disable: () => void;
  }

  interface VariantProps {
    name: string;
    children: ReactNode;
  }
  interface ExperimentProps {
    name: string;
  }
  declare const Experiment: FunctionComponent<ExperimentProps>
  declare const Variant: FunctionComponent<VariantProps>
  declare const mixpanelHelper: {
    enable: VoidFunction;
  }

  interface Variants {
    [key: string]: ReactNode;
  }
  declare const selectVariant: (variants: Variants) => ReactNode
  declare const emitWin: (evt: SyntheticEvent) => void
  declare const useExperiment: (
    name: string
  ) => {
    selectVariant;
    emitWin;
  }
}

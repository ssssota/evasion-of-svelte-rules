<script lang="ts">
  import Markdown from "svelte-exmarkdown";
  import type { Plugin } from "svelte-exmarkdown";
  import { gfmPlugin } from "svelte-exmarkdown/gfm";
  import { twc } from "svelte-twc";
  type Props = {
    md: string;
  };
  let { md }: Props = $props();
  const plugins = [
    gfmPlugin(),
    {
      renderer: {
        h1: twc.h1`font-bold`,
        h2: twc.h2`font-bold mb-6`,
        p: twc.p`mb-4`,
        ul: twc.ul`list-disc pl-8`,
        pre: twc.pre`bg-gray-100 mb-2 rounded-md whitespace-pre-wrap`,
      },
    },
  ] satisfies Plugin[];
</script>

<Markdown {md} {plugins} />

<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";

  const md = `
## Svelteにおける法とは

今回言いたい「法」とは、  
**1ファイル1コンポーネントの法。**

Svelteでは、小さな単位の繰り返しでもコンポーネント化するか、インラインで書くかしかなかった。

しかしSvelte 5では...
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>

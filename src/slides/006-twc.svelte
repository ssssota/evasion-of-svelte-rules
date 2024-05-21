<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";

  const md = `
## svelte-twc

そんなあなたに、svelte-twcを紹介します 🚀

\`\`\`svelte
<script lang="ts">
  import { twc } from "svelte-twc";
  const Div = twc.div\`flex flex-col gap-2\`;
<${"/"}script>
<Div>Hello Svelte!</Div>
\`\`\`

react-twc~~をパクった~~から着想を得た、（脱法）ライブラリ。

コンポーネント内でclass注入済コンポーネントが作成可能に！
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>

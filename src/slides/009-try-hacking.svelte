<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";

  const md = `
## Svelte 5の出力を見てみよう

Svelte 4以前と比較して、Svelte 5の出力は非常に読みやすく！

基本的には、**1コンポーネントにつき関数が1つ生成**される。

変数名なども嫌に短縮されていないので、理解しやすい。  
再現もしやすくなった結果、**脱法しやすくなった！**

---

※ まだRelease Candidateなので内部APIもたまに変わって壊れることも多々ある。

※ このスライドはSvelte 5 + svelte-exmarkdown + svelte-twcを使って作成されています。
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>

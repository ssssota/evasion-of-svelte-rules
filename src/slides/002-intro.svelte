<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";

  const md = `
## だれ

**ssssota**

* \`{"github": "ssssota", "x": "ssssotaro"}\`
* フロントエンドエンジニア
* Svelte関連は完全に趣味でライブラリ作ったり
	* svelte-exmarkdown
	* svelte-twc *[NEW]*
	* svelte-jsx-snippet *[NEW]*
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>

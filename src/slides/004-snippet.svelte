<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";

  const md = `
## Snippetの登場

Svelte 5にて、コンポーネント内で再利用可能な要素を抽出する仕組み **Snippet** が導入された 🚀

\`\`\`svelte
{#snippet reusable()}
  <div>再利用可能な要素</div>
{/snippet}
\`\`\`

\`\`\`svelte
{@render reusable()}
\`\`\`

これ（合法的な手法）で万事解決...
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>

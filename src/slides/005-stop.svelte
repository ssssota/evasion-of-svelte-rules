<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";

  const md = `
## ちょっと待てぃ！！１

\`\`\`svelte
<div class="flex flex-col gap-2">
  {@render children()}
</div>
\`\`\`
↑これを再利用したいときは？

\`\`\`svelte
{#snippet styled_div(children)}...{/snippet}
{@render styled_div(hoge)}
\`\`\`

Snippetの引数を使えばできないこともない...

例だと \`hoge\` もSnippetである必要があり、かなりしんどい。
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>

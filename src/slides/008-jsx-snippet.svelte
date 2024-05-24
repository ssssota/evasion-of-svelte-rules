<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";

  const md = `
## svelte-jsx-snippet

そんなあなたに、svelte-jsx-snippetを紹介します 🚀

\`\`\`tsx
it('...', () => {
  render(MyComponent, {
    children: <div>🥰</div>,
  });
});
\`\`\`

JSXをSnippetsとして処理でき、  
コンポーネント外でSvelteの要素が書けるようになる！
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>

<script lang="ts">
  import PaddingPane from "../components/PaddingPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";

  const md = `
## これでコンポーネントもサクサク作れるぞ！

よし、じゃあテストを書こう！

\`\`\`ts
import { render } from '@testing-library/svelte';
import MyComponent from './MyComponent.svelte';
it('...', () => {
  render(MyComponent, {
    children: '¯\\_(ツ)_/¯', // ...?????
  });
});
\`\`\`

どうやってSnippet渡すんだ！？
`;
</script>

<PaddingPane>
  <Markdown {md} />
</PaddingPane>

<script lang="ts">
  import CenteringPane from "../components/CenteringPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";
  const md = `
## Let's hack Svelte!
`;
</script>

<CenteringPane>
  <Markdown {md} />
</CenteringPane>

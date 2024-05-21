<script lang="ts">
  import CenteringPane from "../components/CenteringPane.svelte";
  import Markdown from "../components/markdown/Markdown.svelte";
  const md = `
# 脱法Svelte

ssssota
`;
</script>

<CenteringPane>
  <Markdown {md} />
</CenteringPane>

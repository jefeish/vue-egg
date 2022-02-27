<template>
<div id="rJxmlycdlc">
  <mdc-top-app-bar class="r1fETy9ulc" title="My App" event="toggledrawer">
    <mdc-top-app-bar-action class="rJXNTy9ulc" icon="help"></mdc-top-app-bar-action>
  
    <mdc-top-app-bar-action class="SkENTJc_lc" icon="file_download"></mdc-top-app-bar-action>
  </mdc-top-app-bar>
  <mdc-drawer class="ByNnGgcOxq" open toolbar-spacer persistent toggle-on="toggledrawer">
    <mdc-drawer-list class="HJr3Me9Ox5">
      <mdc-drawer-item class="BJ82Ml5_x9" start-icon="inbox">Inbox</mdc-drawer-item>
    
      <mdc-drawer-item class="S1vnGx5Oe9" start-icon="send">Sent Mail</mdc-drawer-item>
    
      <mdc-drawer-item class="S1dhMl9Oe9" start-icon="drafts">Drafts</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
  <mdc-drawer class="HylQx9_x9" open toolbar-spacer persistent toggle-on="toggledrawer">
    <mdc-drawer-list class="rJgg7l5_l5">
      <mdc-drawer-item class="Skbe7g9uec" start-icon="inbox">Inbox</mdc-drawer-item>
    
      <mdc-drawer-item class="rkzx7l5_l9" start-icon="send">Sent Mail</mdc-drawer-item>
    
      <mdc-drawer-item class="Symx7xcuxq" start-icon="drafts">Drafts</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
</div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#rJxmlycdlc {
  --mdc-theme-primary: #673ab7;
  --mdc-theme-secondary: #f44336;
  --mdc-theme-background: #ffffff;
  position: relative;
  margin: auto;
  background-color: #ffffff;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.HylQx9_x9 {
  --mdc-theme-primary: rgb(203, 51, 51);
  position: absolute;
  width: 240px;
  height: 1074px;
  top: 0px;
  left: 0px;
}

</style>

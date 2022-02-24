import { defineComponent } from 'vue'
import classes from './index.module.less'
export const riskCount = defineComponent({
  props: {
    count: Number
  },
  setup(props) {
    return () => (
      <div class={[classes.main, classes.danger]}>
        <div>风险值</div>
        <div>{props.count}</div>
      </div>
    )
  }
})

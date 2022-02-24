import { RoleEnum } from '@/enums/roleEnum'
import { defineComponent } from 'vue'

export const roleType = defineComponent({
  props: {
    text: Number
  },
  setup(props) {
    const style = {
      display: 'inline-block',
      padding: '3px 5px',
      background: 'rgba(38, 126, 229, 0.1)',
      color: '#267EE5'
    }
    return () => (
      <div style={style}>
        {props.text === RoleEnum.PLATFORM ? '系统管理员' : '安全分析员'}
      </div>
    )
  }
})

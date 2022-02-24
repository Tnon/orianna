/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-19 11:58:40
 * @LastEditTime: 2022-02-20 17:14:13
 */
export const labelNames = {
    expert_report: {
        labelName: '专家分析结果',
        analyze_summary: '分析概要',
        handle_suggestion: '处置建议'
    },
    outline: {
        labelName: '自动分析概要',
        sample_score: '风险值分数',
        sample_name: '样本名称',
        check_time: '检测时间',
        sample_ext: '样本类型',
        sample_size: '样本大小',
        run_env: '运行环境',
        MD5: 'MD5',
        SHA1: 'SHA1',
        SHA256: 'SHA256',
        SSDEEP: 'SSDeep',
        SHELL: '加壳诊断',
        sample_tag: '样本标签',
        harm_info: '危害情况',
        trans_mode: '传播方式',
        impact_estimate: '影响面评估',
        vulnerability: '漏洞利用情况',
        handle_suggest: '处置建议'
    },
    complex: {
        labelName: '复合式杀毒模块',
        analyze_res: '复合查杀结论',
        engines: '各引擎查杀结果'
    },
    reverse: {
        labelName: '智能逆向分析模块',
        packer: '壳名',
        unpack: '是否脱壳成功',
        crypt_alg: '密码学算法',
        peheader_exp: 'PE文件头部异常类型',
        startup: '启动路径/注册表值',
        avname: '对抗杀毒软件名称',
        mining: '矿池地址',
        apis: 'API序列',
        pos: '序列代码位置',
        apilist: 'API序列列表',
        description: '描述信息'
    },
    behavior: {
        labelName: '行为分析模块',
        analyze_res: '行为分析结果',
        behavior_catagory: '各类敏感行为列表',
        derive_file: '衍生文件',
        process: '进程',
        reg: '注册表',
        file: '文件',
        network: '网络',
        other: '其他'
    },
    threat_hit: {
        labelName: '威胁情报命中',
        high_risk: '高危情报命中',
        medium_risk: '中危情报命中',
        low_risk: '低危情报命中'
    }
}
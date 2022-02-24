/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-09-26 12:59:32
 * @LastEditTime: 2021-11-29 13:55:31
 */
import { TableProps } from "ant-design-vue";

/**
 * 表格拖拽
 * @param dataSource table数据集合
 * @returns customRow 行属性方法
 */
export function useDraggable<T>(dataSource: Array<T>): TableProps['customRow'] {
    let dragItem: T;
    let targItem: T;
    const customRow = (record: T) => {
        return {
            draggable: true,
            ondrag(e: DragEvent) {
                dragItem = record;
            },
            ondrop(e: DragEvent) {
                targItem = record;
            },
            ondragend(e: DragEvent) {
                if (dragItem !== targItem) {
                    const dragItemIndex = dataSource.indexOf(dragItem);
                    const targItemIndex = dataSource.indexOf(targItem);
                    // 解构交换
                    [dataSource[dragItemIndex], dataSource[targItemIndex]] = [
                        dataSource[targItemIndex],
                        dataSource[dragItemIndex],
                    ];
                }
            },
            ondragover(e: DragEvent) {
                return false;
            },
        };
    };
    return customRow
}

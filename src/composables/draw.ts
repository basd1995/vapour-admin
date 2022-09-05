import { fabric } from 'fabric'

export class Draw {
  canvas = ref<fabric.Canvas>()
  rect = ref<fabric.Rect>()
  polygon = ref<fabric.Polygon>()
  // canvas 鼠标按下时的坐标
  mouseDown = ref<any>(null)
  selectedLock = ref<boolean>(false)

  constructor(
    public width: number,
    public height: number,
    public dom: string,
  ) {
    this.init()
    this.creatCC()
    // this.canvasMouseDown(3)
  }

  init() {
    this.canvas.value = new fabric.Canvas(this.dom, {
      width: this.width,
      height: this.height,
    })
    this.canvas.value.on('mouse:down', e => this.canvasMouseDown(e)) // 鼠标在画布上按下
    this.canvas.value.on('mouse:up', e => this.canvasMouseUp(e))
    this.canvas.value.on('object:modified', e => this.canvasModified(e))
    this.canvas.value.on('selection:created', e => this.canvasSelected(e))
    this.canvas.value.on('selection:updated', e => this.canvasSelectedUpdated(e))
    this.canvas.value.on('selection:cleared', e => this.canvasSelectedCleared(e))
    this.canvas.value.selectionColor = 'transparent'
    this.canvas.value.selection = false
    this.canvas.value.selectionBorderColor = 'rgba(0, 0, 0, 0.2)'
    // this.canvas.value.skipTargetFind = true // 禁止选中
    this.canvas.value.skipTargetFind = false // 允许选中
  }

  // canvas 鼠标按下事件
  canvasMouseDown(e: fabric.IEvent) {
    if (this.selectedLock.value)
      return

    this.mouseDown.value = e.absolutePointer
  }

  // canvas 鼠标抬起事件
  canvasMouseUp(e: fabric.IEvent) {
    if (this.selectedLock.value)
      return
    this.createRect(e.absolutePointer)
  }

  // canvas 鼠标选中对象事件
  canvasSelected(e: fabric.IEvent) {
    console.error('e', e)
    this.selectedLock.value = true
  }

  // canvas 鼠标切换选中对象事件
  canvasSelectedUpdated(e: fabric.IEvent) {
    console.error('e', e)
  }

  // canvas 鼠标取消选中对象事件
  canvasSelectedCleared(e: fabric.IEvent) {
    console.error('e', e)
    this.selectedLock.value = false
  }

  // canvas 鼠标修改选中对象事件
  canvasModified(e: fabric.IEvent) {
    console.error('e', e)
  }

  // 生产矩形
  createRect = (pointer: any) => {
  // 点击事件，不生成矩形
    if (JSON.stringify(this.mouseDown.value) === JSON.stringify(pointer))
      return

    // 创建矩形
    // 矩形参数计算
    const top = Math.min(this.mouseDown.value!.y, pointer.y)
    const left = Math.min(this.mouseDown.value.x, pointer.x)
    const width = Math.abs(this.mouseDown.value.x - pointer.x)
    const height = Math.abs(this.mouseDown.value.y - pointer.y)

    // 矩形对象
    this.rect.value = new fabric.Rect({
      top,
      left,
      width,
      height,
      fill: '',
      stroke: 'black',
    })

    // 将矩形添加到画布上
    this.canvas.value?.add(this.rect.value)

    this.mouseDown.value = null
  }

  creatCC() {
    this.polygon.value = new fabric.Polygon(
      [
        { x: 200, y: 0 },
        { x: 250, y: 50 },
        { x: 250, y: 100 },
        { x: 150, y: 100 },
        { x: 150, y: 50 },
      ], {
        left: 200,
        top: 300,
        angle: 0,
        fill: '#f5f3d0',
      })
    this.canvas.value?.add(this.polygon.value)
  }
}

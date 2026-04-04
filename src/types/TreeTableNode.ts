export interface TreeTableNode {
  key: string
  data: {
    name: string
    size: string
    type: string
  }
  children?: TreeTableNode[]
}

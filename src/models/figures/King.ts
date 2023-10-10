import { Figure, FigureNames } from './Figure'
import { Colors } from '../Colors'
import { Cell } from '../Cell'
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'
import { Pawn } from './Pawn'

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KING
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (
      (target.y === this.cell.y + 1 && target.x === this.cell.x + 1) ||
      (target.y === this.cell.y - 1 && target.x === this.cell.x - 1) ||
      (target.x === this.cell.x + 1 && target.y === this.cell.y - 1) ||
      (target.x === this.cell.x - 1 && target.y === this.cell.y + 1) ||
      (target.y === this.cell.y + 1 && target.x === this.cell.x) ||
      (target.y === this.cell.y - 1 && target.x === this.cell.x) ||
      (target.x === this.cell.x + 1 && target.y === this.cell.y) ||
      (target.x === this.cell.x - 1 && target.y === this.cell.y)
    ) {
      return true
    }

    return false
  }
}

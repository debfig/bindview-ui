import err from "./tool/err"
import h from "./tool/h"

export default function (a) {
  if (typeof a === 'string') {
    return h('button', { class: 'bv-button', val: a })
  } else if (typeof a === 'object' && a instanceof Object) {
    if (a.class === undefined) {
      a.class = 'bv-button'
      return h('button', a)
    } else {
      a.class = `bv-button ${a.class}`;
      return h('button', a)
    }
  } else {
    err('Button Parameter error')
  }
}
export default function () { function e(e, r, t) { return { el: e, attr: r, sonNode: t } } let r = {}; switch (arguments.length) { case 1: "string" == typeof arguments[0] && (r = e(arguments[0], {}, [])); break; case 2: "string" == typeof arguments[0] && ("string" == typeof arguments[1] || "number" == typeof arguments[1] ? r = e(arguments[0], { val: arguments[1] }, []) : "object" == typeof arguments[1] && arguments[1] instanceof Array ? r = e(arguments[0], {}, arguments[1]) : "object" == typeof arguments[1] && arguments[1] instanceof Object && (r = arguments[1].el ? e(arguments[0], {}, [arguments[1]]) : e(arguments[0], arguments[1], []))); break; case 3: "string" == typeof arguments[0] && "object" == typeof arguments[2] && arguments[2] instanceof Array && ("string" == typeof arguments[1] || "number" == typeof arguments[1] ? r = e(arguments[0], { val: arguments[1] }, arguments[2]) : "object" == typeof arguments[1] && arguments[1] instanceof Object && (r = e(arguments[0], arguments[1], arguments[2]))) }return r }
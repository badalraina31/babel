try {} catch (_ref) {
  let a34 = babelHelpers.objectWithoutProperties(_ref, []);
}
try {} catch (_ref2) {
  let { a1 } = _ref2;
  let b1 = babelHelpers.objectWithoutProperties(_ref2, ["a1"]);
}
try {} catch (_ref3) {
  let { a2, b2 } = _ref3;
  let c2 = babelHelpers.objectWithoutProperties(_ref3, ["a2", "b2"]);
}

// Unchanged
try {} catch (a) {}
try {} catch ({ b }) {}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = init;

var _constants = require("./constants");

/* eslint-env browser */

/* global Ya */
function init(accounts) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';
  var callbackQueue = (0, _constants.callbackQueueName)(version);
  window[_constants.accountListName] = window[_constants.accountListName] || [];
  window[_constants.accountListName] = window[_constants.accountListName].concat(accounts);
  window[callbackQueue] = window[callbackQueue] || [];
  window[callbackQueue].push(function () {
    accounts.forEach(function (id) {
      var defaultOptions = {
        id: id
      };

      try {
        window[(0, _constants.trackerInstanceName)(id)] = new Ya[(0, _constants.trackerConstructorName)(version)](Object.assign(defaultOptions, options));
      } catch (ex) {
        console.warn(ex);
      }
    });
  });
  accounts.forEach(function (id) {
    window[(0, _constants.trackerVersionName)(id)] = version;
  });
}

;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFIQTs7QUFDQTtBQVVlLFNBQVMsSUFBVCxDQUFjLFFBQWQsRUFBcUQ7QUFBQSxNQUE3QixPQUE2Qix1RUFBbkIsRUFBbUI7QUFBQSxNQUFmLE9BQWUsdUVBQUwsR0FBSztBQUNoRSxNQUFJLGFBQWEsR0FBRyxrQ0FBa0IsT0FBbEIsQ0FBcEI7QUFDQSxFQUFBLE1BQU0sQ0FBQywwQkFBRCxDQUFOLEdBQTBCLE1BQU0sQ0FBQywwQkFBRCxDQUFOLElBQTJCLEVBQXJEO0FBQ0EsRUFBQSxNQUFNLENBQUMsMEJBQUQsQ0FBTixHQUEwQixNQUFNLENBQUMsMEJBQUQsQ0FBTixDQUF3QixNQUF4QixDQUErQixRQUEvQixDQUExQjtBQUNBLEVBQUEsTUFBTSxDQUFDLGFBQUQsQ0FBTixHQUF3QixNQUFNLENBQUMsYUFBRCxDQUFOLElBQXlCLEVBQWpEO0FBQ0EsRUFBQSxNQUFNLENBQUMsYUFBRCxDQUFOLENBQXNCLElBQXRCLENBQTJCLFlBQU07QUFDN0IsSUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFBLEVBQUUsRUFBSTtBQUNuQixVQUFJLGNBQWMsR0FBRztBQUFDLFFBQUEsRUFBRSxFQUFGO0FBQUQsT0FBckI7O0FBRUEsVUFBSTtBQUNBLFFBQUEsTUFBTSxDQUFDLG9DQUFvQixFQUFwQixDQUFELENBQU4sR0FBa0MsSUFBSSxFQUFFLENBQUMsdUNBQXVCLE9BQXZCLENBQUQsQ0FBTixDQUM5QixNQUFNLENBQUMsTUFBUCxDQUFjLGNBQWQsRUFBOEIsT0FBOUIsQ0FEOEIsQ0FBbEM7QUFHSCxPQUpELENBSUUsT0FBTyxFQUFQLEVBQVc7QUFDVCxRQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsRUFBYjtBQUNIO0FBQ0osS0FWRDtBQVdILEdBWkQ7QUFhQSxFQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUEsRUFBRSxFQUFJO0FBQ25CLElBQUEsTUFBTSxDQUFDLG1DQUFtQixFQUFuQixDQUFELENBQU4sR0FBaUMsT0FBakM7QUFDSCxHQUZEO0FBR0g7O0FBQUEiLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuLyogZ2xvYmFsIFlhICovXG5cbmltcG9ydCB7XG4gICAgYWNjb3VudExpc3ROYW1lLFxuICAgIGNhbGxiYWNrUXVldWVOYW1lLFxuICAgIHRyYWNrZXJDb25zdHJ1Y3Rvck5hbWUsXG4gICAgdHJhY2tlckluc3RhbmNlTmFtZSxcbiAgICB0cmFja2VyVmVyc2lvbk5hbWVcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KGFjY291bnRzLCBvcHRpb25zID0ge30sIHZlcnNpb24gPSAnMScpIHtcbiAgICBsZXQgY2FsbGJhY2tRdWV1ZSA9IGNhbGxiYWNrUXVldWVOYW1lKHZlcnNpb24pO1xuICAgIHdpbmRvd1thY2NvdW50TGlzdE5hbWVdID0gd2luZG93W2FjY291bnRMaXN0TmFtZV0gfHwgW107XG4gICAgd2luZG93W2FjY291bnRMaXN0TmFtZV0gPSB3aW5kb3dbYWNjb3VudExpc3ROYW1lXS5jb25jYXQoYWNjb3VudHMpO1xuICAgIHdpbmRvd1tjYWxsYmFja1F1ZXVlXSA9IHdpbmRvd1tjYWxsYmFja1F1ZXVlXSB8fCBbXTtcbiAgICB3aW5kb3dbY2FsbGJhY2tRdWV1ZV0ucHVzaCgoKSA9PiB7XG4gICAgICAgIGFjY291bnRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRPcHRpb25zID0ge2lkfTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbdHJhY2tlckluc3RhbmNlTmFtZShpZCldID0gbmV3IFlhW3RyYWNrZXJDb25zdHJ1Y3Rvck5hbWUodmVyc2lvbildKFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGFjY291bnRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICB3aW5kb3dbdHJhY2tlclZlcnNpb25OYW1lKGlkKV0gPSB2ZXJzaW9uO1xuICAgIH0pO1xufTtcbiJdfQ==
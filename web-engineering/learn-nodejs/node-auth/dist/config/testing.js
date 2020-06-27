"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var config = {
  dbUrl: process.env.TEST_DB_URL,
  jwt: process.env.TEST_JWT,
  port: process.env.TEST_PORT
};
exports.config = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvdGVzdGluZy5qcyJdLCJuYW1lcyI6WyJkb3RlbnYiLCJjb25maWciLCJkYlVybCIsInByb2Nlc3MiLCJlbnYiLCJURVNUX0RCX1VSTCIsImp3dCIsIlRFU1RfSldUIiwicG9ydCIsIlRFU1RfUE9SVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0FBLG1CQUFPQyxNQUFQOztBQUNPLElBQU1BLE1BQU0sR0FBRztBQUNwQkMsRUFBQUEsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FEQztBQUVwQkMsRUFBQUEsR0FBRyxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFGRztBQUdwQkMsRUFBQUEsSUFBSSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUs7QUFIRSxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuZG90ZW52LmNvbmZpZygpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgZGJVcmw6IHByb2Nlc3MuZW52LlRFU1RfREJfVVJMLFxuICBqd3Q6IHByb2Nlc3MuZW52LlRFU1RfSldULFxuICBwb3J0OiBwcm9jZXNzLmVudi5URVNUX1BPUlRcbn0iXX0=
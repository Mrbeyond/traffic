"use strict";

const constants = {
  SERVER_ERROR: 'Internal sever error',
  SIGNUP_SUCCESS: 'User created successfully',
  LOGIN_SUCCESS: 'You have loggedIn successfully',
  NO_USER: 'User does not exist',
  ALREADY_EXIST: 'User already exist, please login',
  UNAUTHORIZED: 'Not authorized to be here',
  INVALID_USER: 'Username or password is not valid',

  NOT_EXIST: 'Email does not exist in our database, please enter a correct email',
  INVALID_TOKEN: 'Token not valid',
  FORGOT_SUCCESS: 'Forgot password request sent',
  PASSWORD_REQUEST: 'Forgot password request',
  PASSWORD_EXIST: 'Password already exist please, login or continue with password reset',
  RESET_SUCCESS: 'Password successfully reset',
  TRAFFIC_WARDER_SUCCESS: 'Traffic warden created successfully',
  WARDEN_EXIST: 'Traffic warden already exist',
  REPORT_SUCCESS: 'Report sent successfully',
  NOT_WARDEN: 'Only traffic warden can send a report',
  NOT_REPORT: 'No report found',
  REPORTS: 'Reports retrieved successfully',
  UNDEFINED: 'This user is undefined',
  MAP_SUCCESS: 'Map created successfully',
  MAP_UPDATE: 'Map updated successfully',
  REPORT_UPDATE: 'Report updated successfully',
  INVALID_REPORT_OWNER: 'You have not created any report yet',
  NO_WARDEN: 'You have not created any warden yet',
  WARDENS: 'Wardens retrieved successfully',
  WARDEN_NOT_EXIST: 'Traffic warden does not exist',
  WARDEN: 'Traffic warden retrieved successfully',
  NO_REPORT: 'You have not created any report yet, kindly create one',
  NO_UPDATES: 'No traffic updates, please check back',
  USER_DELETED: ' Warden has been deleted successfully',
  WARDEN_UPDATE: ' Warden has been updated successfully',
  REPORT_NOT_EXIST: 'Report does not exist',
}

/**
 * This constants are exported and would
 *  be used across the app to ease response messages
 */
module.exports = constants
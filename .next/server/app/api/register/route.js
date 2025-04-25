/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/register/route";
exports.ids = ["app/api/register/route"];
exports.modules = {

/***/ "(rsc)/./app/api/register/route.js":
/*!***********************************!*\
  !*** ./app/api/register/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// ✅ Database from /data folder (not /public)\nconst dbPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'public', 'GameOverTournament.db');\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_1___default())(dbPath);\nasync function POST(req) {\n    try {\n        const { user_id, tournament_id, game_title } = await req.json();\n        // Check if tournament exists\n        const tournament = db.prepare('SELECT * FROM tournaments WHERE id = ?').get(tournament_id);\n        if (!tournament) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Tournament not found'\n            }, {\n                status: 404\n            });\n        }\n        if (tournament.remaining_spots <= 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'No spots remaining'\n            }, {\n                status: 400\n            });\n        }\n        // 🔍 Insert user into users table if not exists\n        const userExists = db.prepare('SELECT 1 FROM users WHERE user_id = ?').get(user_id);\n        if (!userExists) {\n            db.prepare(`\n          INSERT INTO users (user_id, email, role)\n          VALUES (?, ?, 'player')\n        `).run(user_id, user_id); // we use email as user_id\n        }\n        // Prevent duplicate registrations\n        const alreadyRegistered = db.prepare('SELECT 1 FROM registrations WHERE user_id = ? AND tournament_id = ?').get(user_id, tournament_id);\n        if (alreadyRegistered) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'You are already registered for this tournament.'\n            }, {\n                status: 400\n            });\n        }\n        // Insert into registrations\n        db.prepare(`\n        INSERT INTO registrations (user_id, tournament_id, status, game_title, date)\n        VALUES (?, ?, 'registered', ?, ?)\n      `).run(user_id, tournament_id, game_title, tournament.date);\n        // Update spots\n        db.prepare(`\n        UPDATE tournaments\n        SET remaining_spots = remaining_spots - 1\n        WHERE id = ?\n      `).run(tournament_id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error('Registration error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal Server Error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlZ2lzdGVyL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNMO0FBQ2Q7QUFFeEIsNkNBQTZDO0FBQzdDLE1BQU1HLFNBQVNELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSSxVQUFVO0FBQ2xELE1BQU1DLEtBQUssSUFBSU4sdURBQVFBLENBQUNFO0FBRWpCLGVBQWVLLEtBQUtDLEdBQUc7SUFDMUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFHLE1BQU1ILElBQUlJLElBQUk7UUFFN0QsNkJBQTZCO1FBQzdCLE1BQU1DLGFBQWFQLEdBQUdRLE9BQU8sQ0FBQywwQ0FBMENDLEdBQUcsQ0FBQ0w7UUFDNUUsSUFBSSxDQUFDRyxZQUFZO1lBQ2YsT0FBT2QscURBQVlBLENBQUNhLElBQUksQ0FBQztnQkFBRUksT0FBTztZQUF1QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDNUU7UUFFQSxJQUFJSixXQUFXSyxlQUFlLElBQUksR0FBRztZQUNuQyxPQUFPbkIscURBQVlBLENBQUNhLElBQUksQ0FBQztnQkFBRUksT0FBTztZQUFxQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDMUU7UUFFQSxnREFBZ0Q7UUFDaEQsTUFBTUUsYUFBYWIsR0FBR1EsT0FBTyxDQUFDLHlDQUF5Q0MsR0FBRyxDQUFDTjtRQUMzRSxJQUFJLENBQUNVLFlBQVk7WUFDZmIsR0FBR1EsT0FBTyxDQUFDLENBQUM7OztRQUdaLENBQUMsRUFBRU0sR0FBRyxDQUFDWCxTQUFTQSxVQUFVLDBCQUEwQjtRQUN0RDtRQUVBLGtDQUFrQztRQUNsQyxNQUFNWSxvQkFBb0JmLEdBQUdRLE9BQU8sQ0FDbEMsdUVBQ0FDLEdBQUcsQ0FBQ04sU0FBU0M7UUFDZixJQUFJVyxtQkFBbUI7WUFDckIsT0FBT3RCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7Z0JBQUVJLE9BQU87WUFBa0QsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3ZHO1FBRUEsNEJBQTRCO1FBQzVCWCxHQUFHUSxPQUFPLENBQUMsQ0FBQzs7O01BR1osQ0FBQyxFQUFFTSxHQUFHLENBQUNYLFNBQVNDLGVBQWVDLFlBQVlFLFdBQVdTLElBQUk7UUFFMUQsZUFBZTtRQUNmaEIsR0FBR1EsT0FBTyxDQUFDLENBQUM7Ozs7TUFJWixDQUFDLEVBQUVNLEdBQUcsQ0FBQ1Y7UUFFUCxPQUFPWCxxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO1lBQUVXLFNBQVM7UUFBSztJQUUzQyxFQUFFLE9BQU9QLE9BQU87UUFDZFEsUUFBUVIsS0FBSyxDQUFDLHVCQUF1QkE7UUFDckMsT0FBT2pCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRUksT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvY2xhdWRpYW1lbmRlcy9EZXNrdG9wL1NvbGVudCBTZXNzaW9ucy9ZZWFyVGhyZWVfMy9Db250ZW1wb3JhcnkgV2ViIEFwcGxpY2F0aW9ucyAoUUhPNjQwKS9Bc3Nlc3NtZW50L0dhbWVPdmVyVG91cm5hbWVudC9hcHAvYXBpL3JlZ2lzdGVyL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBEYXRhYmFzZSBmcm9tICdiZXR0ZXItc3FsaXRlMyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8g4pyFIERhdGFiYXNlIGZyb20gL2RhdGEgZm9sZGVyIChub3QgL3B1YmxpYylcbmNvbnN0IGRiUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ0dhbWVPdmVyVG91cm5hbWVudC5kYicpO1xuY29uc3QgZGIgPSBuZXcgRGF0YWJhc2UoZGJQYXRoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgdXNlcl9pZCwgdG91cm5hbWVudF9pZCwgZ2FtZV90aXRsZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgXG4gICAgICAvLyBDaGVjayBpZiB0b3VybmFtZW50IGV4aXN0c1xuICAgICAgY29uc3QgdG91cm5hbWVudCA9IGRiLnByZXBhcmUoJ1NFTEVDVCAqIEZST00gdG91cm5hbWVudHMgV0hFUkUgaWQgPSA/JykuZ2V0KHRvdXJuYW1lbnRfaWQpO1xuICAgICAgaWYgKCF0b3VybmFtZW50KSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVG91cm5hbWVudCBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgICB9XG4gIFxuICAgICAgaWYgKHRvdXJuYW1lbnQucmVtYWluaW5nX3Nwb3RzIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdObyBzcG90cyByZW1haW5pbmcnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgICB9XG4gIFxuICAgICAgLy8g8J+UjSBJbnNlcnQgdXNlciBpbnRvIHVzZXJzIHRhYmxlIGlmIG5vdCBleGlzdHNcbiAgICAgIGNvbnN0IHVzZXJFeGlzdHMgPSBkYi5wcmVwYXJlKCdTRUxFQ1QgMSBGUk9NIHVzZXJzIFdIRVJFIHVzZXJfaWQgPSA/JykuZ2V0KHVzZXJfaWQpO1xuICAgICAgaWYgKCF1c2VyRXhpc3RzKSB7XG4gICAgICAgIGRiLnByZXBhcmUoYFxuICAgICAgICAgIElOU0VSVCBJTlRPIHVzZXJzICh1c2VyX2lkLCBlbWFpbCwgcm9sZSlcbiAgICAgICAgICBWQUxVRVMgKD8sID8sICdwbGF5ZXInKVxuICAgICAgICBgKS5ydW4odXNlcl9pZCwgdXNlcl9pZCk7IC8vIHdlIHVzZSBlbWFpbCBhcyB1c2VyX2lkXG4gICAgICB9XG4gIFxuICAgICAgLy8gUHJldmVudCBkdXBsaWNhdGUgcmVnaXN0cmF0aW9uc1xuICAgICAgY29uc3QgYWxyZWFkeVJlZ2lzdGVyZWQgPSBkYi5wcmVwYXJlKFxuICAgICAgICAnU0VMRUNUIDEgRlJPTSByZWdpc3RyYXRpb25zIFdIRVJFIHVzZXJfaWQgPSA/IEFORCB0b3VybmFtZW50X2lkID0gPydcbiAgICAgICkuZ2V0KHVzZXJfaWQsIHRvdXJuYW1lbnRfaWQpO1xuICAgICAgaWYgKGFscmVhZHlSZWdpc3RlcmVkKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnWW91IGFyZSBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHRoaXMgdG91cm5hbWVudC4nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gSW5zZXJ0IGludG8gcmVnaXN0cmF0aW9uc1xuICAgICAgZGIucHJlcGFyZShgXG4gICAgICAgIElOU0VSVCBJTlRPIHJlZ2lzdHJhdGlvbnMgKHVzZXJfaWQsIHRvdXJuYW1lbnRfaWQsIHN0YXR1cywgZ2FtZV90aXRsZSwgZGF0ZSlcbiAgICAgICAgVkFMVUVTICg/LCA/LCAncmVnaXN0ZXJlZCcsID8sID8pXG4gICAgICBgKS5ydW4odXNlcl9pZCwgdG91cm5hbWVudF9pZCwgZ2FtZV90aXRsZSwgdG91cm5hbWVudC5kYXRlKTtcbiAgXG4gICAgICAvLyBVcGRhdGUgc3BvdHNcbiAgICAgIGRiLnByZXBhcmUoYFxuICAgICAgICBVUERBVEUgdG91cm5hbWVudHNcbiAgICAgICAgU0VUIHJlbWFpbmluZ19zcG90cyA9IHJlbWFpbmluZ19zcG90cyAtIDFcbiAgICAgICAgV0hFUkUgaWQgPSA/XG4gICAgICBgKS5ydW4odG91cm5hbWVudF9pZCk7XG4gIFxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlZ2lzdHJhdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgICB9XG4gIH1cbiAgIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkRhdGFiYXNlIiwicGF0aCIsImRiUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZGIiLCJQT1NUIiwicmVxIiwidXNlcl9pZCIsInRvdXJuYW1lbnRfaWQiLCJnYW1lX3RpdGxlIiwianNvbiIsInRvdXJuYW1lbnQiLCJwcmVwYXJlIiwiZ2V0IiwiZXJyb3IiLCJzdGF0dXMiLCJyZW1haW5pbmdfc3BvdHMiLCJ1c2VyRXhpc3RzIiwicnVuIiwiYWxyZWFkeVJlZ2lzdGVyZWQiLCJkYXRlIiwic3VjY2VzcyIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/register/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_claudiamendes_Desktop_Solent_Sessions_YearThree_3_Contemporary_Web_Applications_QHO640_Assessment_GameOverTournament_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/register/route.js */ \"(rsc)/./app/api/register/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/register/route\",\n        pathname: \"/api/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/register/route\"\n    },\n    resolvedPagePath: \"/Users/claudiamendes/Desktop/Solent Sessions/YearThree_3/Contemporary Web Applications (QHO640)/Assessment/GameOverTournament/app/api/register/route.js\",\n    nextConfigOutput,\n    userland: _Users_claudiamendes_Desktop_Solent_Sessions_YearThree_3_Contemporary_Web_Applications_QHO640_Assessment_GameOverTournament_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmNsYXVkaWFtZW5kZXMlMkZEZXNrdG9wJTJGU29sZW50JTIwU2Vzc2lvbnMlMkZZZWFyVGhyZWVfMyUyRkNvbnRlbXBvcmFyeSUyMFdlYiUyMEFwcGxpY2F0aW9ucyUyMChRSE82NDApJTJGQXNzZXNzbWVudCUyRkdhbWVPdmVyVG91cm5hbWVudCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZjbGF1ZGlhbWVuZGVzJTJGRGVza3RvcCUyRlNvbGVudCUyMFNlc3Npb25zJTJGWWVhclRocmVlXzMlMkZDb250ZW1wb3JhcnklMjBXZWIlMjBBcHBsaWNhdGlvbnMlMjAoUUhPNjQwKSUyRkFzc2Vzc21lbnQlMkZHYW1lT3ZlclRvdXJuYW1lbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3VHO0FBQ3BMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY2xhdWRpYW1lbmRlcy9EZXNrdG9wL1NvbGVudCBTZXNzaW9ucy9ZZWFyVGhyZWVfMy9Db250ZW1wb3JhcnkgV2ViIEFwcGxpY2F0aW9ucyAoUUhPNjQwKS9Bc3Nlc3NtZW50L0dhbWVPdmVyVG91cm5hbWVudC9hcHAvYXBpL3JlZ2lzdGVyL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yZWdpc3Rlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3JlZ2lzdGVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9jbGF1ZGlhbWVuZGVzL0Rlc2t0b3AvU29sZW50IFNlc3Npb25zL1llYXJUaHJlZV8zL0NvbnRlbXBvcmFyeSBXZWIgQXBwbGljYXRpb25zIChRSE82NDApL0Fzc2Vzc21lbnQvR2FtZU92ZXJUb3VybmFtZW50L2FwcC9hcGkvcmVnaXN0ZXIvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("better-sqlite3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
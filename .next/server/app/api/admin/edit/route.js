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
exports.id = "app/api/admin/edit/route";
exports.ids = ["app/api/admin/edit/route"];
exports.modules = {

/***/ "(rsc)/./app/api/admin/edit/route.js":
/*!*************************************!*\
  !*** ./app/api/admin/edit/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst dbPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'public', 'GameOverTournament.db');\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_1___default())(dbPath);\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { id, game_title, date, city, country, total_spots, latitude, longitude } = body;\n        // First get the existing tournament\n        const tournament = db.prepare('SELECT * FROM tournaments WHERE id = ?').get(id);\n        if (!tournament) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Tournament not found'\n            }, {\n                status: 404\n            });\n        }\n        // Calculate how much to adjust remaining_spots\n        const spotsDifference = total_spots - tournament.total_spots;\n        const newRemainingSpots = tournament.remaining_spots + spotsDifference;\n        if (newRemainingSpots < 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Cannot have negative remaining spots'\n            }, {\n                status: 400\n            });\n        }\n        // ✅ Now update tournament\n        db.prepare(`\n      UPDATE tournaments\n      SET \n        game_title = ?, \n        date = ?, \n        city = ?, \n        country = ?, \n        total_spots = ?, \n        remaining_spots = ?, \n        latitude = ?, \n        longitude = ?\n      WHERE id = ?\n    `).run(game_title, date, city, country, total_spots, newRemainingSpots, latitude, longitude, id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error('Edit tournament error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal Server Error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2VkaXQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ0w7QUFDZDtBQUV4QixNQUFNRyxTQUFTRCxnREFBUyxDQUFDRyxRQUFRQyxHQUFHLElBQUksVUFBVTtBQUNsRCxNQUFNQyxLQUFLLElBQUlOLHVEQUFRQSxDQUFDRTtBQUVqQixlQUFlSyxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHVDtRQUVsRixvQ0FBb0M7UUFDcEMsTUFBTVUsYUFBYWIsR0FBR2MsT0FBTyxDQUFDLDBDQUEwQ0MsR0FBRyxDQUFDVjtRQUM1RSxJQUFJLENBQUNRLFlBQVk7WUFDZixPQUFPcEIscURBQVlBLENBQUNXLElBQUksQ0FBQztnQkFBRVksT0FBTztZQUF1QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDNUU7UUFFQSwrQ0FBK0M7UUFDL0MsTUFBTUMsa0JBQWtCUixjQUFjRyxXQUFXSCxXQUFXO1FBQzVELE1BQU1TLG9CQUFvQk4sV0FBV08sZUFBZSxHQUFHRjtRQUV2RCxJQUFJQyxvQkFBb0IsR0FBRztZQUN6QixPQUFPMUIscURBQVlBLENBQUNXLElBQUksQ0FBQztnQkFBRVksT0FBTztZQUF1QyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDNUY7UUFFQSwwQkFBMEI7UUFDMUJqQixHQUFHYyxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0lBWVosQ0FBQyxFQUFFTyxHQUFHLENBQ0pmLFlBQ0FDLE1BQ0FDLE1BQ0FDLFNBQ0FDLGFBQ0FTLG1CQUNBUixVQUNBQyxXQUNBUDtRQUdGLE9BQU9aLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRWtCLFNBQVM7UUFBSztJQUMzQyxFQUFFLE9BQU9OLE9BQU87UUFDZE8sUUFBUVAsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBT3ZCLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRVksT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvY2xhdWRpYW1lbmRlcy9EZXNrdG9wL1NvbGVudCBTZXNzaW9ucy9ZZWFyVGhyZWVfMy9Db250ZW1wb3JhcnkgV2ViIEFwcGxpY2F0aW9ucyAoUUhPNjQwKS9Bc3Nlc3NtZW50L0dhbWVPdmVyVG91cm5hbWVudC9hcHAvYXBpL2FkbWluL2VkaXQvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IERhdGFiYXNlIGZyb20gJ2JldHRlci1zcWxpdGUzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBkYlBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYycsICdHYW1lT3ZlclRvdXJuYW1lbnQuZGInKTtcbmNvbnN0IGRiID0gbmV3IERhdGFiYXNlKGRiUGF0aCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGNvbnN0IHsgaWQsIGdhbWVfdGl0bGUsIGRhdGUsIGNpdHksIGNvdW50cnksIHRvdGFsX3Nwb3RzLCBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBib2R5O1xuXG4gICAgLy8gRmlyc3QgZ2V0IHRoZSBleGlzdGluZyB0b3VybmFtZW50XG4gICAgY29uc3QgdG91cm5hbWVudCA9IGRiLnByZXBhcmUoJ1NFTEVDVCAqIEZST00gdG91cm5hbWVudHMgV0hFUkUgaWQgPSA/JykuZ2V0KGlkKTtcbiAgICBpZiAoIXRvdXJuYW1lbnQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVG91cm5hbWVudCBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGhvdyBtdWNoIHRvIGFkanVzdCByZW1haW5pbmdfc3BvdHNcbiAgICBjb25zdCBzcG90c0RpZmZlcmVuY2UgPSB0b3RhbF9zcG90cyAtIHRvdXJuYW1lbnQudG90YWxfc3BvdHM7XG4gICAgY29uc3QgbmV3UmVtYWluaW5nU3BvdHMgPSB0b3VybmFtZW50LnJlbWFpbmluZ19zcG90cyArIHNwb3RzRGlmZmVyZW5jZTtcblxuICAgIGlmIChuZXdSZW1haW5pbmdTcG90cyA8IDApIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQ2Fubm90IGhhdmUgbmVnYXRpdmUgcmVtYWluaW5nIHNwb3RzJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIC8vIOKchSBOb3cgdXBkYXRlIHRvdXJuYW1lbnRcbiAgICBkYi5wcmVwYXJlKGBcbiAgICAgIFVQREFURSB0b3VybmFtZW50c1xuICAgICAgU0VUIFxuICAgICAgICBnYW1lX3RpdGxlID0gPywgXG4gICAgICAgIGRhdGUgPSA/LCBcbiAgICAgICAgY2l0eSA9ID8sIFxuICAgICAgICBjb3VudHJ5ID0gPywgXG4gICAgICAgIHRvdGFsX3Nwb3RzID0gPywgXG4gICAgICAgIHJlbWFpbmluZ19zcG90cyA9ID8sIFxuICAgICAgICBsYXRpdHVkZSA9ID8sIFxuICAgICAgICBsb25naXR1ZGUgPSA/XG4gICAgICBXSEVSRSBpZCA9ID9cbiAgICBgKS5ydW4oXG4gICAgICBnYW1lX3RpdGxlLFxuICAgICAgZGF0ZSxcbiAgICAgIGNpdHksXG4gICAgICBjb3VudHJ5LFxuICAgICAgdG90YWxfc3BvdHMsXG4gICAgICBuZXdSZW1haW5pbmdTcG90cyxcbiAgICAgIGxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlLFxuICAgICAgaWRcbiAgICApO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFZGl0IHRvdXJuYW1lbnQgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJEYXRhYmFzZSIsInBhdGgiLCJkYlBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImRiIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwiaWQiLCJnYW1lX3RpdGxlIiwiZGF0ZSIsImNpdHkiLCJjb3VudHJ5IiwidG90YWxfc3BvdHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInRvdXJuYW1lbnQiLCJwcmVwYXJlIiwiZ2V0IiwiZXJyb3IiLCJzdGF0dXMiLCJzcG90c0RpZmZlcmVuY2UiLCJuZXdSZW1haW5pbmdTcG90cyIsInJlbWFpbmluZ19zcG90cyIsInJ1biIsInN1Y2Nlc3MiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/edit/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fedit%2Froute&page=%2Fapi%2Fadmin%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fedit%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fedit%2Froute&page=%2Fapi%2Fadmin%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fedit%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_claudiamendes_Desktop_Solent_Sessions_YearThree_3_Contemporary_Web_Applications_QHO640_Assessment_GameOverTournament_app_api_admin_edit_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/edit/route.js */ \"(rsc)/./app/api/admin/edit/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/edit/route\",\n        pathname: \"/api/admin/edit\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/edit/route\"\n    },\n    resolvedPagePath: \"/Users/claudiamendes/Desktop/Solent Sessions/YearThree_3/Contemporary Web Applications (QHO640)/Assessment/GameOverTournament/app/api/admin/edit/route.js\",\n    nextConfigOutput,\n    userland: _Users_claudiamendes_Desktop_Solent_Sessions_YearThree_3_Contemporary_Web_Applications_QHO640_Assessment_GameOverTournament_app_api_admin_edit_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmVkaXQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkbWluJTJGZWRpdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkbWluJTJGZWRpdCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmNsYXVkaWFtZW5kZXMlMkZEZXNrdG9wJTJGU29sZW50JTIwU2Vzc2lvbnMlMkZZZWFyVGhyZWVfMyUyRkNvbnRlbXBvcmFyeSUyMFdlYiUyMEFwcGxpY2F0aW9ucyUyMChRSE82NDApJTJGQXNzZXNzbWVudCUyRkdhbWVPdmVyVG91cm5hbWVudCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZjbGF1ZGlhbWVuZGVzJTJGRGVza3RvcCUyRlNvbGVudCUyMFNlc3Npb25zJTJGWWVhclRocmVlXzMlMkZDb250ZW1wb3JhcnklMjBXZWIlMjBBcHBsaWNhdGlvbnMlMjAoUUhPNjQwKSUyRkFzc2Vzc21lbnQlMkZHYW1lT3ZlclRvdXJuYW1lbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lHO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY2xhdWRpYW1lbmRlcy9EZXNrdG9wL1NvbGVudCBTZXNzaW9ucy9ZZWFyVGhyZWVfMy9Db250ZW1wb3JhcnkgV2ViIEFwcGxpY2F0aW9ucyAoUUhPNjQwKS9Bc3Nlc3NtZW50L0dhbWVPdmVyVG91cm5hbWVudC9hcHAvYXBpL2FkbWluL2VkaXQvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL2VkaXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi9lZGl0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9lZGl0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2NsYXVkaWFtZW5kZXMvRGVza3RvcC9Tb2xlbnQgU2Vzc2lvbnMvWWVhclRocmVlXzMvQ29udGVtcG9yYXJ5IFdlYiBBcHBsaWNhdGlvbnMgKFFITzY0MCkvQXNzZXNzbWVudC9HYW1lT3ZlclRvdXJuYW1lbnQvYXBwL2FwaS9hZG1pbi9lZGl0L3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fedit%2Froute&page=%2Fapi%2Fadmin%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fedit%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fedit%2Froute&page=%2Fapi%2Fadmin%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fedit%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
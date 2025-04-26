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
exports.id = "app/api/admin/cancel/route";
exports.ids = ["app/api/admin/cancel/route"];
exports.modules = {

/***/ "(rsc)/./app/api/admin/cancel/route.js":
/*!***************************************!*\
  !*** ./app/api/admin/cancel/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst dbPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'public', 'GameOverTournament.db');\nconst db = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_1___default())(dbPath);\nasync function POST(req) {\n    try {\n        const { id } = await req.json();\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Missing ID'\n            }, {\n                status: 400\n            });\n        }\n        // Optionally: Mark tournament as canceled\n        db.prepare(`\n      UPDATE tournaments\n      SET game_title = game_title || ' (Canceled)'\n      WHERE id = ?\n    `).run(id);\n        // Update registrations related to this tournament\n        db.prepare(`\n      UPDATE registrations\n      SET status = 'Tournament Cancelled'\n      WHERE tournament_id = ?\n    `).run(id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error('Cancel tournament error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal Server Error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2NhbmNlbC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDTDtBQUNkO0FBRXhCLE1BQU1HLFNBQVNELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSSxVQUFVO0FBQ2xELE1BQU1DLEtBQUssSUFBSU4sdURBQVFBLENBQUNFO0FBRWpCLGVBQWVLLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUcsTUFBTUQsSUFBSUUsSUFBSTtRQUU3QixJQUFJLENBQUNELElBQUk7WUFDUCxPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWEsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2xFO1FBRUEsMENBQTBDO1FBQzFDTixHQUFHTyxPQUFPLENBQUMsQ0FBQzs7OztJQUlaLENBQUMsRUFBRUMsR0FBRyxDQUFDTDtRQUVQLGtEQUFrRDtRQUNsREgsR0FBR08sT0FBTyxDQUFDLENBQUM7Ozs7SUFJWixDQUFDLEVBQUVDLEdBQUcsQ0FBQ0w7UUFFUCxPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVLLFNBQVM7UUFBSztJQUMzQyxFQUFFLE9BQU9KLE9BQU87UUFDZEssUUFBUUwsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBT1oscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbGF1ZGlhbWVuZGVzL0Rlc2t0b3AvU29sZW50IFNlc3Npb25zL1llYXJUaHJlZV8zL0NvbnRlbXBvcmFyeSBXZWIgQXBwbGljYXRpb25zIChRSE82NDApL0Fzc2Vzc21lbnQvR2FtZU92ZXJUb3VybmFtZW50L2FwcC9hcGkvYWRtaW4vY2FuY2VsL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBEYXRhYmFzZSBmcm9tICdiZXR0ZXItc3FsaXRlMyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgZGJQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAnR2FtZU92ZXJUb3VybmFtZW50LmRiJyk7XG5jb25zdCBkYiA9IG5ldyBEYXRhYmFzZShkYlBhdGgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIElEJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIC8vIE9wdGlvbmFsbHk6IE1hcmsgdG91cm5hbWVudCBhcyBjYW5jZWxlZFxuICAgIGRiLnByZXBhcmUoYFxuICAgICAgVVBEQVRFIHRvdXJuYW1lbnRzXG4gICAgICBTRVQgZ2FtZV90aXRsZSA9IGdhbWVfdGl0bGUgfHwgJyAoQ2FuY2VsZWQpJ1xuICAgICAgV0hFUkUgaWQgPSA/XG4gICAgYCkucnVuKGlkKTtcblxuICAgIC8vIFVwZGF0ZSByZWdpc3RyYXRpb25zIHJlbGF0ZWQgdG8gdGhpcyB0b3VybmFtZW50XG4gICAgZGIucHJlcGFyZShgXG4gICAgICBVUERBVEUgcmVnaXN0cmF0aW9uc1xuICAgICAgU0VUIHN0YXR1cyA9ICdUb3VybmFtZW50IENhbmNlbGxlZCdcbiAgICAgIFdIRVJFIHRvdXJuYW1lbnRfaWQgPSA/XG4gICAgYCkucnVuKGlkKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQ2FuY2VsIHRvdXJuYW1lbnQgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiRGF0YWJhc2UiLCJwYXRoIiwiZGJQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYiIsIlBPU1QiLCJyZXEiLCJpZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInByZXBhcmUiLCJydW4iLCJzdWNjZXNzIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/cancel/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fcancel%2Froute&page=%2Fapi%2Fadmin%2Fcancel%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fcancel%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fcancel%2Froute&page=%2Fapi%2Fadmin%2Fcancel%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fcancel%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_claudiamendes_Desktop_Solent_Sessions_YearThree_3_Contemporary_Web_Applications_QHO640_Assessment_GameOverTournament_app_api_admin_cancel_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/cancel/route.js */ \"(rsc)/./app/api/admin/cancel/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/cancel/route\",\n        pathname: \"/api/admin/cancel\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/cancel/route\"\n    },\n    resolvedPagePath: \"/Users/claudiamendes/Desktop/Solent Sessions/YearThree_3/Contemporary Web Applications (QHO640)/Assessment/GameOverTournament/app/api/admin/cancel/route.js\",\n    nextConfigOutput,\n    userland: _Users_claudiamendes_Desktop_Solent_Sessions_YearThree_3_Contemporary_Web_Applications_QHO640_Assessment_GameOverTournament_app_api_admin_cancel_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmNhbmNlbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZjYW5jZWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRmNhbmNlbCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmNsYXVkaWFtZW5kZXMlMkZEZXNrdG9wJTJGU29sZW50JTIwU2Vzc2lvbnMlMkZZZWFyVGhyZWVfMyUyRkNvbnRlbXBvcmFyeSUyMFdlYiUyMEFwcGxpY2F0aW9ucyUyMChRSE82NDApJTJGQXNzZXNzbWVudCUyRkdhbWVPdmVyVG91cm5hbWVudCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZjbGF1ZGlhbWVuZGVzJTJGRGVza3RvcCUyRlNvbGVudCUyMFNlc3Npb25zJTJGWWVhclRocmVlXzMlMkZDb250ZW1wb3JhcnklMjBXZWIlMjBBcHBsaWNhdGlvbnMlMjAoUUhPNjQwKSUyRkFzc2Vzc21lbnQlMkZHYW1lT3ZlclRvdXJuYW1lbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzJHO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY2xhdWRpYW1lbmRlcy9EZXNrdG9wL1NvbGVudCBTZXNzaW9ucy9ZZWFyVGhyZWVfMy9Db250ZW1wb3JhcnkgV2ViIEFwcGxpY2F0aW9ucyAoUUhPNjQwKS9Bc3Nlc3NtZW50L0dhbWVPdmVyVG91cm5hbWVudC9hcHAvYXBpL2FkbWluL2NhbmNlbC9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vY2FuY2VsL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vY2FuY2VsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9jYW5jZWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvY2xhdWRpYW1lbmRlcy9EZXNrdG9wL1NvbGVudCBTZXNzaW9ucy9ZZWFyVGhyZWVfMy9Db250ZW1wb3JhcnkgV2ViIEFwcGxpY2F0aW9ucyAoUUhPNjQwKS9Bc3Nlc3NtZW50L0dhbWVPdmVyVG91cm5hbWVudC9hcHAvYXBpL2FkbWluL2NhbmNlbC9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fcancel%2Froute&page=%2Fapi%2Fadmin%2Fcancel%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fcancel%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fcancel%2Froute&page=%2Fapi%2Fadmin%2Fcancel%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fcancel%2Froute.js&appDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fclaudiamendes%2FDesktop%2FSolent%20Sessions%2FYearThree_3%2FContemporary%20Web%20Applications%20(QHO640)%2FAssessment%2FGameOverTournament&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
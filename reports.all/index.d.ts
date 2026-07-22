/**
 *  filename: index.d.ts
 *  version : 14.1.12
 *  Copyright Syncfusion Inc. 2001 - 2026. All rights reserved.
 *  Use of this code is subject to the terms of our license.
 *  A copy of the current license can be obtained at any time by e-mailing
 *  licensing@syncfusion.com. Any infringement will be prosecuted under
 *  applicable laws.
 */
declare namespace ej {
    const dataUtil: DataUtil;
    function isMobile(): boolean;
    function isIOS(): boolean;
    function isAndroid(): boolean;
    function isFlat(): boolean;
    function isWindows(): boolean;
    function isCssCalc(): boolean;
    function getCurrentPage(): JQuery;
    function isLowerResolution(): boolean;
    function browserInfo(): BrowserInfoOptions;
    function isTouchDevice(): boolean;
    function addPrefix(style: string): string;
    function animationEndEvent(): string;
    function blockDefaultActions(e: any): void;
    function buildTag(tag: string, innerHtml?: string, styles?: any, attrs?: any): JQuery;
    function cancelEvent(): string;
    function copyObject(): string;
    function createObject(nameSpace: string, value: any, initIn: any): JQuery;
    function createObject(element: any, eventEmitter: any, model: any): any;
    function setCulture(culture: string): void;
    function getObject(element: string, model: any): any;
    function getObject(nameSpace: string, fromdata?: any): any;
    function defineClass(className: string, constr: any, proto: any, replace: boolean): any;
    function destroyWidgets(element: any): void;
    function endEvent(): string;
    function event(type: string, data: any, eventProp: any): any;
    function getAndroidVersion(): any;
    function getAttrVal(ele: any, val: string, option: any): any;
    function getBooleanVal(ele: any, val: string, option: any): any;
    function getClearString(): string;
    function getDimension(element: any, method: string): any;
    function getFontString(fontObj: any): string;
    function getFontStyle(style: string): string;
    function getMaxZindex(): number;
    function getNameSpace(className: string): string;
    function getOffset(ele: string): any;
    function getRenderMode(): string;
    function getScrollableParents(element: any): JQuery;
    function getTheme(): string;
    function getZindexPartial(element: any, popupEle: string): number;
    function hasRenderMode(element: string): void;
    function hasStyle(prop: string): boolean;
    function hasTheme(element: string): string;
    function hexFromRGB(color: string): string;
    function ieClearRemover(element: string): void;
    function isAndroidWebView(): string;
    function isDevice(): boolean;
    function isIOS7(): boolean;
    function isIOSWebView(): boolean;
    function isLowerAndroid(): boolean;
    function isNullOrUndefined(value: any): boolean;
    function isPlainObject(): JQuery;
    function isPortrait(): any;
    function isTablet(): boolean;
    function isWindowsWebView(): string;
    function listenEvents(selectors: any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function listenTouchEvent(selectors: any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function logBase(val: string, base: string): number;
    function measureText(text: string, maxwidth: number, font: string): string;
    function moveEvent(): string;
    function print(element: string, printWindow: any): void;
    function proxy(fn: any, context?: string, arg?: string): any;
    function round(value: string, div: string, up: string): any;
    function sendAjaxRequest(ajaxOptions: any): void;
    function setCaretToPos(nput: string, pos1: string, pos2: string): void;
    function setRenderMode(element: string): void;
    function setTheme(): any;
    function startEvent(): string;
    function tapEvent(): string;
    function tapHoldEvent(): string;
    function throwError(): any;
    function transitionEndEvent(): any;
    function userAgent(): boolean;
    function widget(pluginName: string, className: string, proto: any): any;
    function avg(json: any, filedName: string): any;
    function getGuid(prefix: string): number;
    function group(jsonArray: any, field: string, agg: string, level: number, groupDs: string): any;
    function isJSON(jsonData: string): string;
    function max(jsonArray: any, fieldName?: string, comparer?: string): any;
    function min(jsonArray: any, fieldName: string, comparer: string): any;
    function merge(first: string, second: string): any;
    function mergeshort(jsonArray: any, fieldName: string, comparer: string): any;
    function parseJSON(jsonText: string): string;
    function parseTable(table: number, headerOption: string, headerRowIndex: string): any;
    function select(jsonArray: any, fields: string): any;
    function setTransition(): boolean;
    function sum(json: string, fieldName: string): string;
    function swap(array: any, x: string, y: string): any;
    const cssUA: string;
    const serverTimezoneOffset: number;
    const transform: string;
    const transformOrigin: string;
    const transformStyle: string;
    const transition: string;
    const transitionDelay: string;
    const transitionDuration: string;
    const transitionProperty: string;
    const transitionTimingFunction: string;
    const template: any;
    const util: {
        valueFunction(val: string): any;
    };
    export namespace device {
        function isAndroid(): boolean;
        function isIOS(): boolean;
        function isFlat(): boolean;
        function isIOS7(): boolean;
        function isWindows(): boolean;
    }
    export namespace widget {
        const autoInit: boolean;
        const registeredInstances: any[];
        const registeredWidgets: any[];
        function register(pluginName: string, className: string, prototype: any): void;
        function destroyAll(elements: Element): void;
        function init(element: Element): void;
        function registerInstance(element: Element, pluginName: string, className: string, prototype: any): void;
    }

    interface BrowserInfoOptions {
        name: string;
        version: string;
        culture: any;
        isMSPointerEnabled: boolean;
    }
    class WidgetBase {
        public destroy(): void;
        public element: JQuery;
        public setModel(options: any, forceSet?: boolean): any;
        public option(prop?: any, value?: any, forceSet?: boolean): any;
        public _trigger(eventName?: string, eventProp?: any): any;
        public _on(element: JQuery, eventType?: string, handler?: (eventObject: JQueryEventObject) => any): any;
        public _on(element: JQuery, eventType?: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): any;
        public _off(element: JQuery, eventName: string, handler?: (eventObject: JQueryEventObject) => any): any;
        public _off(element: JQuery, eventType?: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): any;
        public persistState(): void;
        public restoreState(silent: boolean): void;
    }

    class Widget extends WidgetBase {
        constructor(pluginName: string, className: string, proto: any);
        public static fn: Widget;
        public static extend(widget: Widget): any;
        public register(pluginName: string, className: string, prototype: any): void;
        public destroyAll(elements: Element): void;
        public model: any;
    }


    interface BaseEvent {
        cancel: boolean;
        type: string;
    }
    class DataManager {
        constructor(dataSource?: any, query?: ej.Query, adaptor?: any);
        public setDefaultQuery(query: ej.Query): void;
        public executeQuery(query?: ej.Query, done?: any, fail?: any, always?: any): JQueryPromise<any>;
        public executeLocal(query?: ej.Query): ej.DataManager;
        public saveChanges(changes?: Changes, key?: string, tableName?: string): JQueryDeferred<any>;
        public insert(data: any, tableName?: string): JQueryPromise<any>;
        public remove(keyField: string, value: any, tableName?: string): any;
        public publicupdate(keyField: string, value: any, tableName?: string): any;
    }

    class Query {
        constructor();
        public static fn: Query;
        public static extend(prototype: any): Query;
        public key(field: string): ej.Query;
        public using(dataManager: ej.DataManager): ej.Query;
        public execute(dataManager: ej.DataManager, done: any, fail?: string, always?: string): any;
        public executeLocal(dataManager: ej.DataManager): ej.DataManager;
        public clone(): ej.Query;
        public from(tableName: any): ej.Query;
        public addParams(key: string, value: string): ej.Query;
        public expand(tables: any): ej.Query;
        public where(fieldName: string, operator: ej.FilterOperators, value: any, ignoreCase?: boolean, ignoreAccent?: boolean): ej.Query;
        public where(predicate: ej.Predicate): ej.Query;
        public search(searchKey: any, fieldNames?: any, operator?: string, ignoreCase?: boolean, ignoreAccent?: boolean): ej.Query;
        public sortBy(fieldName: string, comparer?: ej.SortOrder, isFromGroup?: boolean): ej.Query;
        public sortByDesc(fieldName: string): ej.Query;
        public group(fieldName: string): ej.Query;
        public page(pageIndex: number, pageSize: number): ej.Query;
        public take(nos: number): ej.Query;
        public skip(nos: number): ej.Query;
        public select(fieldNames: any): ej.Query;
        public hierarchy(query: ej.Query, selectorFn: any): ej.Query;
        public foreignKey(key: string): ej.Query;
        public requiresCount(): ej.Query;
        public range(start: number, end: number): ej.Query;
    }

    class Adaptor {
        constructor(ds: any);
        public pvt: any;
        public type: ej.Adaptor;
        public options: AdaptorOptions;
        public extend(overrides: any): ej.Adaptor;
        public processQuery(dm: ej.DataManager, query: ej.Query): any;
        public processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
        public convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
    }

    interface AdaptorOptions {
        from?: string;
        requestType?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        group?: string;
        take?: string;
        search?: string;
        count?: string;
        where?: string;
        aggregates?: string;
    }

    class UrlAdaptor extends ej.Adaptor {
        constructor();
        public processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
        public convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
        public processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
        public onGroup(e: any): void;
        public onAggregates(e: any): void;
        public batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        public beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        public insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        public remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        public update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        public getFiltersFrom(data: any, query: ej.Query): ej.Predicate;
    }
    class WebMethodAdaptor extends ej.UrlAdaptor {
        constructor();
        public processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
    }
    class CacheAdaptor extends ej.UrlAdaptor {
        constructor();
        public init(adaptor: any, timeStamp: number, pageSize: number): void;
        public generateKey(url: string, query: ej.Query): string;
        public processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): any;
        public processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
        public insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        public remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        public update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        public batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: any; contentType: string };
    }
    class ODataAdaptor extends ej.UrlAdaptor {
        constructor();
        public options: UrlAdaptorOptions;
        public onEachWhere(filter: any, requiresCast: boolean): any;
        public onPredicate(pred: ej.Predicate, query: ej.Query, requiresCast: boolean): string;
        public onComplexPredicate(pred: ej.Predicate, requiresCast: boolean): string;
        public onWhere(filters: string[]): string;
        public onEachSearch(e: any): void;
        public onSearch(e: any): string;
        public onEachSort(e: any): string;
        public onSortBy(e: any): string;
        public onGroup(e: any): string;
        public onSelect(e: any): string;
        public onAggregates(e: any): string;
        public onCount(e: any): string;
        public beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        public processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
        };
        public convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
        public insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any; };
        public remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; };
        // tslint:disable-next-line:max-line-length
        public update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: any; accept: string; };
        public batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: any; contentType: string; };
        public generateDeleteRequest(arr: any[], e: any): string;
        public generateInsertRequest(arr: any[], e: any): string;
        public generateUpdateRequest(arr: any[], e: any): string;
    }
    interface UrlAdaptorOptions {
        requestType?: string;
        accept?: string;
        multipartAccept?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        take?: string;
        count?: string;
        where?: string;
        expand?: string;
        batch?: string;
        changeSet?: string;
        batchPre?: string;
        contentId?: string;
        batchContent?: string;
        changeSetContent?: string;
        batchChangeSetContentType?: string;
    }

    class WebApiAdaptor extends ej.ODataAdaptor {
        constructor();
        public insert(dm: ej.DataManager, data: any, tableName?: string): { url: string; type: string; data: any; };
        public remove(dm: ej.DataManager, value: any, keyField?: string, tableName?: string): { url: string; type: string; data: any; };
        // tslint:disable-next-line:max-line-length
        public update(dm: ej.DataManager, value: any, keyField?: string, tableName?: string): { url: string; type: string; data: any; accept: string; };
        public processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
        };
    }

    class ODataV4Adaptor extends ej.ODataAdaptor {
        constructor();
        public options: ODataAdaptorOptions;
        public onCount(e: any): string;
        public onEachSearch(e: any): void;
        public onSearch(e: any): string;
        public beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        public processQuery(ds: any, query: ej.Query): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
        public processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
        };
    }
    interface ODataAdaptorOptions {
        requestType?: string;
        accept?: string;
        multipartAccept?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        take?: string;
        count?: string;
        search?: string;
        where?: string;
        expand?: string;
        batch?: string;
        changeSet?: string;
        batchPre?: string;
        contentId?: string;
        batchContent?: string;
        changeSetContent?: string;
        batchChangeSetContentType?: string;
    }

    class JsonAdaptor extends ej.Adaptor {
        constructor();
        public processQuery(ds: any, query: ej.Query): string;
        public batchRequest(dm: ej.DataManager, changes: Changes, e: any): Changes;
        public onWhere(ds: any, e: any): any;
        public onAggregates(ds: any, e: any): any;
        public onSearch(ds: any, e: any): any;
        public onSortBy(ds: any, e: any, query: ej.Query): any;
        public onGroup(ds: any, e: any, query: ej.Query): any;
        public onPage(ds: any, e: any, query: ej.Query): any;
        public onRange(ds: any, e: any): any;
        public onTake(ds: any, e: any): any;
        public onSkip(ds: any, e: any): any;
        public onSelect(ds: any, e: any): any;
        public insert(dm: ej.DataManager, data: any, tableName?: string): any;
        public remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): any;
        public update(dm: ej.DataManager, keyField: string, value: any, tableName: string): any;
    }
    class ForeignKeyAdaptor extends ej.JsonAdaptor {
        constructor(data: any, type: string);
        public processQuery(ds: any, query: ej.Query): any;
        public insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        public update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: any };
    }
    class RemoteSaveAdaptor extends ej.UrlAdaptor {
        constructor();
        public batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        public beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        public insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        public remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        public update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
    }
    class TableModel {
        constructor(name: string, jsonArray: any[], dataManager: ej.DataManager, modelComputed: any);
        public on(eventName: string, handler: any): void;
        public off(eventName: string, handler: any): void;
        public setDataManager(dataManager: DataManager): void;
        public saveChanges(): void;
        public rejectChanges(): void;
        public insert(json: any): void;
        public update(value: any): void;
        public remove(key: string): void;
        public isDirty(): boolean;
        public getChanges(): Changes;
        public toArray(): any[];
        public setDirty(dirty: any, model: any): void;
        public get(index: number): void;
        public length(): number;
        public bindTo(element: any): void;
    }
    class Model {
        constructor(json: any, table: string, name: string);
        public formElements: string[];
        public computes(value: any): void;
        public on(eventName: string, handler: any): void;
        public off(eventName: string, handler: any): void;
        public set(field: string, value: any): void;
        public get(field: string): any;
        public revert(suspendEvent: any): void;
        public save(dm: ej.DataManager, key: string): void;
        public markCommit(): void;
        public markDelete(): void;
        public changeState(state: boolean, args: any): void;
        public properties(): any;
        public bindTo(element: any): void;
        public unbind(element: any): void;
    }
    interface Changes {
        changed?: any[];
        added?: any[];
        deleted?: any[];
    }
    class Predicate {
        constructor();
        constructor(field: string, operator: ej.FilterOperators, value: any, ignoreCase: boolean, ignoreAccent?: boolean);
        public and(field: string, operator: any, value: any, ignoreCase: boolean, ignoreAccent?: boolean): ej.Predicate;
        public or(field: string, operator: any, value: any, ignoreCase: boolean, ignoreAccent?: boolean): ej.Predicate;
        public or(predicate: any[]): any;
        public validate(record: any): boolean;
        public toJSON(): {
            isComplex: boolean;
            field: string;
            operator: string;
            value: any;
            ignoreCase: boolean;
            condition: string;
            predicates: any;
        };
    }
    interface DataUtil {
        swap(array: any[], x: number, y: number): void;
        mergeSort(jsonArray: any[], fieldName?: string, comparer?: any): any[];
        max(jsonArray: any[], fieldName?: string, comparer?: string): any[];
        min(jsonArray: any[], fieldName: string, comparer: string): any[];
        distinct(jsonArray: any[], fieldName?: string, requiresCompleteRecord?: any): any[];
        sum(json: any, fieldName: string): number;
        avg(json: any, fieldName: string): number;
        select(jsonArray: any[], fieldName: string, fields: string): any[];
        group(jsonArray: any[], field: string, /* internal */ level: number): any[];
        parseTable(table: string, headerOption: ej.headerOption, headerRowIndex: number): any;
    }
    interface AjaxSettings {
        type?: string;
        cache: boolean;
        data?: any;
        dataType?: string;
        contentType?: any;
        async?: boolean;
    }
    enum FilterOperators {
        contains,
        endsWith,
        equal,
        greaterThan,
        greaterThanOrEqual,
        lessThan,
        lessThanOrEqual,
        notEqual,
        startsWith
    }

    enum MatrixDefaults {
        m11,
        m12,
        m21,
        m22,
        offsetX,
        offsetY,
        type
    }
    enum MatrixTypes {
        Identity,
        Scaling,
        Translation,
        Unknown
    }

    enum Orientation {
        Horizontal,
        Vertical
    }

    enum SliderType {
        Default,
        MinRange,
        Range
    }

    enum eventType {
        click,
        mouseDown,
        mouseLeave,
        mouseMove,
        mouseUp
    }
    enum headerOption {
        row,
        tHead
    }

    enum filterType {
        StartsWith,
        Contains,
        EndsWith,
        LessThan,
        GreaterThan,
        LessThanOrEqual,
        GreaterThanOrEqual,
        Equal,
        NotEqual
    }
    enum Animation {
        Fade,
        None,
        Slide
    }
    enum Type {
        Overlay,
        Slide
    }
    enum SortOrder {
        Ascending,
        Descending
    }
    const globalize: Globalize;
    const cultures: Culture;
    function addCulture(name: string, culture?: any): void;
    function preferredCulture(culture?: string): Culture;
    function format(value: any, format: string, culture?: string): string;
    function parseInt(value: string, radix?: any, culture?: string): number;
    function parseFloat(value: string, radix?: any, culture?: string): number;
    function parseDate(value: string, format: string, culture?: string): Date;
    function getLocalizedConstants(controlName: string, culture?: string): any;
    function findCulture(culture?: string): Culture;

    interface Globalize {
        addCulture(name: string, culture?: any): void;
        preferredCulture(culture?: string): Culture;
        format(value: any, format: string, culture?: string): string;
        parseInt(value: string, radix?: any, culture?: string): number;
        parseFloat(value: string, radix?: any, culture?: string): number;
        parseDate(value: string, format: string, culture?: string): Date;
        getLocalizedConstants(controlName: string, culture?: string): any;
        findCulture(culture?: string): Culture;
    }
    interface Culture {
        name?: string;
        englishName?: string;
        namtiveName?: string;
        language?: string;
        isRTL: boolean;
        numberFormat?: FormatSettings;
        calendars?: CalendarsSettings;
    }
    interface FormatSettings {
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        percent: PercentSettings;
        currency: CurrencySettings;
    }
    interface PercentSettings {
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        symbol: string;
    }
    interface CurrencySettings {
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        symbol: string;
    }
    interface CalendarsSettings {
        standard: StandardSettings;
    }
    interface StandardSettings {
        firstDay: number;
        days: DaySettings;
        months: MonthSettings;
        AM: string[];
        PM: string[];
        twoDigitYearMax: number;
        patterns: PatternSettings;
    }
    interface DaySettings {
        names: string[];
        namesAbbr: string[];
        namesShort: string[];
    }
    interface MonthSettings {
        names: string[];
        namesAbbr: string[];
    }
    interface PatternSettings {
        d: string;
        D: string;
        t: string;
        T: string;
        f: string;
        F: string;
        M: string;
        Y: string;
        S: string;
    }
    class ReportDesigner extends ej.Widget {
        public static fn: ReportDesigner;
        constructor(element: JQuery | Element, options?: ReportDesigner.Model);
        public static locale: any;
        public model: ReportDesigner.Model;
        public defaults: ReportDesigner.Model;

        /** Add a dataset to the report at runtime.
         * @param {any} a JSON to define a connection properties for dataset
         * @returns {void}
         */
        public addDataSet(dataset: any): void;

        /** Add a datasource to the report at runtime.
         * @param {any} a JSON to define a connection properties for datasource
         * @returns {void}
         */
        public addDataSource(datasource: any): void;

        /** Add a report item to the report at runtime.
         * @param {any} JSON for the new report item to be added.
         * @returns {void}
         */
        public addItem(item: any): void;

        /** Add a parameter to the report at runtime.
         * @param {any} JSON for the new parameter to be added in the report
         * @returns {void}
         */
        public addParameter(reportParameter: any): void;

        /** Visually move the selected report item over its closest intersected report items.
         * @returns {void}
         */
        public bringForward(): void;

        /** Visually move the selected report item over all other intersected report items.
         * @returns {void}
         */
        public bringToFront(): void;

        /** Determines whether a copy operation is possible.
         * @returns {boolean}
         */
        public canCopy(): boolean;

        /** Determines whether a cut operation is possible.
         * @returns {boolean}
         */
        public canCut(): boolean;

        /** Determines whether a paste operation is possible.
         * @returns {boolean}
         */
        public canPaste(): boolean;

        /** Returns the boolean value indicating whether the user can redo the previous action in the report.
         * @returns {boolean}
         */
        public canRedo(): boolean;

        /** Determines whether a delete operation is possible.
         * @returns {boolean}
         */
        public canRemove(): boolean;

        /** Returns a boolean value indicating whether the user can undo the previous action in the report.
         * @returns {boolean}
         */
        public canUndo(): boolean;

        /** Clone the existing dataset in the report at runtime.
         * @param {string} Name of the existing dataset in report
         * @returns {void}
         */
        public cloneDataSet(name: string): void;

        /** Clone the existing datasource in the report at runtime.
         * @param {string} Name of the existing datasource in report
         * @returns {void}
         */
        public cloneDataSource(name: string): void;

        /** Copies the selected report item from design panel to the Report Designer internal clipboard.
         * @returns {void}
         */
        public copy(): void;

        /** Cuts the selected report item from design panel to the Report Designer internal clipboard.
         * @returns {void}
         */
        public cut(): void;

        /** Destroy the client and server side report designer processing objects.
         * @returns {void}
         */
        public destroy(): void;

        /** Get the list of datasets from the report.
         * @returns {void}
         */
        public getDataSets(): void;

        /** Get the list of datasources from the report.
         * @returns {void}
         */
        public getDataSources(): void;

        /** Get the list of parameters from the report.
         * @returns {void}
         */
        public getParameters(): void;

        /** Returns the boolean value that specifies whether the report has changes or not.
         * @returns {boolean}
         */
        public hasReportChanges(): boolean;

        /** Returns the boolean value that specifies whether the currently processing report is a new report or not.
         * @returns {boolean}
         */
        public isNewReport(): boolean;

        /** Returns the boolean value that specifies whether the currently processing report is a new server report or not.
         * @returns {boolean}
         */
        public isNewServerReport(): boolean;

        /** Returns the boolean value that specifies whether the currently processing report is obtained from the server or local.
         * @returns {boolean}
         */
        public isServerReport(): boolean;

        /** To create a new report.
         * @param {string} Name of the new report
         * @param {string} Name of the shared dataset
         * @returns {void}
         */
        public newReport(name: string, dataSetPath: string): void;

        /** To create a new report in the report server.
         * @param {string} Name of the new report
         * @param {string} Name of the shared dataset
         * @returns {void}
         */
        public newServerReport(name: string, dataSetPath: string): void;

        /** This method opens the report from the report server.
         * @param {string} Path of the report server report.
         * @param {string} Reports server URL.
         * @param {any} .
         * @returns {undefined}
         */
        public openReport(reportPath: string, serverUrl: string, callBackInfo: any): undefined;

        /** This method opens the report using raw report data.
         * @param {any} Provide the report definition in the JSON or string or XML format
         * @returns {void}
         */
        public openReportDefinition(rdlData: any): void;

        /** Opens the client browse dialog to browse the report.
         * @returns {void}
         */
        public openReportFromDevice(): void;

        /** Opens the report designer browse dialog to browse the available reports in the report server.
         * @returns {void}
         */
        public openServerReportDialog(): void;

        /** Pastes the selected report item from the Report Designer internal clipboard to design panel.
         * @returns {void}
         */
        public paste(): void;

        /** Reverses the action of the last Undo command.
         * @returns {void}
         */
        public redo(): void;

        /** Deletes the selected report item from the report.
         * @returns {void}
         */
        public remove(): void;

        /** Remove a dataset from the report at runtime.
         * @param {string} Name of the dataset
         * @returns {void}
         */
        public removeDataSet(dataset: string): void;

        /** Remove a datasource from the report at runtime.
         * @param {string} Name of the datasource
         * @returns {void}
         */
        public removeDatasource(datasource: string): void;

        /** Remove the given report item from the report.
         * @param {string} Name of the report item to be removed from the  report
         * @returns {void}
         */
        public removeItem(itemName: string): void;

        /** Remove a parameter from the report at runtime.
         * @param {string} Name of the existing report parameter
         * @returns {void}
         */
        public removeParameter(reportParameterName: string): void;

        /** This method saves the report into the report server.
         * @param {string} Path of the report server report.
         * @param {boolean} If True denotes report Edit action, otherwise new report Create action.
         * @param {any} .
         * @returns {undefined}
         */
        public saveReport(reportPath: string, isOverWrite: boolean, callBackInfo: any): undefined;

        /** This method returns the report in JSON or XML format.
         * @param {Function} Callback method to return the report data.
         * @param {ej.ReportDesigner.DataFormat} Specify the format as JSON or XML to save the report.
         * @returns {void}
         */
        public saveReportDefinition(callback: Function, type: ej.ReportDesigner.DataFormat | string): void;

        /** Opens the report designer browse dialog to save the report into report server.
         * @returns {void}
         */
        public saveServerReportDialog(): void;

        /** To download the designed report.
         * @returns {void}
         */
        public saveToDevice(): void;

        /** Update the selection to report item at runtime.
         * @param {any[]} Name of the report items
         * @returns {void}
         */
        public selectItems(itemNames: any[]): void;

        /** Visually move the selected report item behind its closest intersected report item.
         * @returns {void}
         */
        public sendBackward(): void;

        /** Visually move the selected report item behind all other intersected report items.
         * @returns {void}
         */
        public sendToBack(): void;

        /** Performs switch action from viewer to designer at runtime.
         * @returns {void}
         */
        public showDesign(): void;

        /** Opens the new report dialog.
         * @param {Function} Callback method of new report dialog actions
         * @returns {void}
         */
        public showNewReportDialog(callback: Function): void;

        /** Opens the report designer browse dialog to open/save reports in the report server.
         * @param {ej.ReportDesigner.BrowseType} Mention the type as Open to perform open report action, otherwise Save.
         * @param {Function} .
         * @returns {undefined}
         */
        public showOpenSaveReportDialog(browseType: ej.ReportDesigner.BrowseType | string, callback: Function): undefined;

        /** Performs switch action from designer to viewer at runtime.
         * @returns {void}
         */
        public showPreview(): void;

        /** Reverses the last action that was performed.
         * @returns {void}
         */
        public undo(): void;

        /** Updates the existing dataset in the report at runtime.
         * @param {string} Name of the existing dataset
         * @param {any} a JSON to define a connection properties for dataset
         * @returns {void}
         */
        public updateDataset(datasetName: string, dataset: any): void;

        /** Updates the existing datasource in the report at runtime.
         * @param {string} Name of the existing datasource
         * @param {any} a JSON to define a connection properties for datasource
         * @returns {void}
         */
        public updateDatasource(datasourceName: string, datasource: any): void;

        /** Updates the existing parameter in the report at runtime.
         * @param {string} Name of the existing report parameter
         * @param {any} JSON for the new parameter to be added in the report
         * @returns {void}
         */
        public updateParameter(reportParameterName: string, reportParameter: any): void;
    }
    export namespace ReportDesigner {

        export interface Model {

            /** Shows or hides the items of configuration pane in ReportDesigner control.
             */
            configurePaneSettings?: ConfigurePaneSettings;

            /** Gets or sets the tab index of data panel.
             * @Default {ej.ReportDesigner.DataTab.Dataset}
             */
            dataTabIndex?: ej.ReportDesigner.DataTab | string;

            /** Set the property as true to disable the code module configuration in RDL reports.
             * @Default {false}
             */
            disableCodeModule?: boolean;

            /** Set the property as false to disable the Ruler in the report design area.
             * @Default {true}
             */
            enableRuler?: boolean;

            /** Set the property to true to enable the visual appearance of the page margin in the report design area.
             * @Default {false}
             */
            enablePageMargin?: boolean;

            // tslint:disable:max-line-length
            /** Gets or sets the embed token configured with user details, custom attributes, and report parameters to access the Report Server API services, instead of using the service
             * authorization token.
             * @Default {empty}
             */
            // tslint:enable:max-line-length
            embedToken?: string;

            /** Enable or Disable Impersonate option for report designer datasources
             * @Default {false}
             */
            enableImpersonate?: boolean;

            /** Set the property as true to load images as blob in GET ajax calls.
             * @Default {false}
             */
            enableImageBlobing?: boolean;

            /** Set the property as true to enable the option to assign multiple dataset for table report item
             * @Default {false}
             */
            enableTableMultipleDataAssign?: boolean;

            /** Set this property to true to allow users to view and publish report items as reusable report parts.
             * @Default {false}
             */
            enableReportPart?: boolean;

            /** Set this property to true to show the option to enable the operators in report parameters.
             * @Default {false}
             */
            enableParameterOperator?: boolean;

            /** Gets or sets the data connectors name as array of strings to filter data connectors in data panel.
             * @Default {[ ]}
             */
            filterDataConnectors?: any[];

            /** Gets or sets the report items name as array of strings to filter report items in item panel.
             * @Default {[ ]}
             */
            filterReportItems?: any[];

            /** Gets or sets the list of custom font names.
             * @Default {[ ]}
             */
            fontNames?: any[];

            /** Specifies the locale for report designer.
             * @Default {en-US}
             */
            locale?: string;

            /** Shows or hides the create, edit, and delete options in data source and dataset panels.
             */
            permissionSettings?: PermissionSettings;

            /** Gets or sets the properties, events and methods of Report Viewer component for report preview action from Report Designer.
             */
            previewOptions?: PreviewOptions;

            /** Gets or sets the list of custom data extension items.
             * @Default {[ ]}
             */
            reportDataExtensions?: ReportDataExtension[];

            /** Gets or sets the list of custom report items.
             * @Default {[ ]}
             */
            reportItemExtensions?: ReportItemExtension[];

            /** Gets or sets the report path of server.
             * @Default {null}
             */
            reportPath?: string;

            /** Gets or sets the schema version of the report.
             * @Default {2016}
             */
            reportVersion?: string;

            /** Gets or sets the report type.
             * @Default {ej.ReportDesigner.ReportType.RDL}
             */
            reportType?: ej.ReportDesigner.ReportType | string;

            /** Gets or sets the reports server URL.
             * @Default {null}
             */
            reportServerUrl?: string;

            /** Gets or sets the service authorization token to access the Report Server API services.
             * @Default {empty}
             */
            serviceAuthorizationToken?: string;

            /** Gets or sets the URL of the  WebAPI service; it will be used for processing the report.
             * @Default {null}
             */
            serviceUrl?: string;

            /** Defines the settings of the ReportDesigner toolbar.
             */
            toolbarSettings?: ToolbarSettings;

            /** Gets or sets the waiting popup template for the Report designer.
             * @Default {null}
             */
            waitingPopupTemplate?: string;

            /** Gets or sets the zoom factor for report designer.
             * @Default {ej.ReportDesigner.ZoomFactor.Z_100}
             */
            zoomFactor?: ej.ReportDesigner.ZoomFactor | string;

            /** This event will be triggered before AJAX loads.
             */
            ajaxBeforeLoad?(e: AjaxBeforeLoadEventArgs): void;

            /** This event will be triggered when AJAX result is failed.
             */
            ajaxError?(e: AjaxErrorEventArgs): void;

            /** This event will be triggered when AJAX result is succeeded.
             */
            ajaxSuccess?(e: AjaxSuccessEventArgs): void;

            /** This event will be triggered when the Report Designer widget is created.
             */
            create?(e: CreateEventArgs): void;

            /** This event will be triggered when the Report Designer widget is destroyed.
             */
            destroy?(e: DestroyEventArgs): void;

            // tslint:disable:max-line-length
            /** This event will be triggered while initiating new data click action. You can suppress the new data creation panel and perform custom actions.
             */
            // tslint:enable:max-line-length
            newDataClick?(e: NewDataClickEventArgs): void;

            /** This event will be triggered while clicking open menu items.
             */
            openReportClick?(e: OpenReportClickEventArgs): void;

            // tslint:disable:max-line-length
            /** This event will be triggered while previewing the report in RDLC mode. It can be used to suppress the preview data dialog in RDLC mode.
             */
            // tslint:enable:max-line-length
            previewReport?(e: PreviewReportEventArgs): void;

            /** This event will be triggered when the report is modified.
             */
            reportModified?(e: ReportModifiedEventArgs): void;

            /** This event will be triggered when the report is opened.
             */
            reportOpened?(e: ReportOpenedEventArgs): void;

            /** This event will be triggered when the report is saved.
             */
            reportSaved?(e: ReportSavedEventArgs): void;

            /** This event will be triggered when the save menu items are clicked.
             */
            saveReportClick?(e: SaveReportClickEventArgs): void;

            /** This event will be triggered while clicking the toolbar items.
             */
            toolbarClick?(e: ToolbarClickEventArgs): void;

            /** This event will be triggered on rendering the Report Designer toolbar.
             */
            toolbarRendering?(e: ToolbarRenderingEventArgs): void;

            /** This event will be triggered when data encryption is performing.
             */
            encryptData?(e: EncryptDataEventArgs): void;

            /** This event will be triggered when data decryption is performing.
             */
            decryptData?(e: DecryptDataEventArgs): void;
        }

        export interface AjaxBeforeLoadEventArgs {

            /** AJAX headers, we can pass any custom header through this property
             */
            headers?: any[];

            /** To pass the custom data while AJAX post back
             */
            data?: any;

            /** Token of report designer
             */
            reportDesignerToken?: string;

            /** Token of ReportingService
             */
            serviceAuthorizationToken?: string;

            /** Embed Token of ReportingService
             */
            embedToken?: string;

            /** Action type of AJAX call back
             */
            actionType?: string;

            /** Returns the report designer model
             */
            model?: any;
        }

        export interface AjaxErrorEventArgs {

            /** Returns the AJAX headers
             */
            headers?: any[];

            /** Returns the failure data
             */
            data?: any;

            /** Token of report designer
             */
            reportDesignerToken?: string;

            /** Token of ReportingService
             */
            serviceAuthorizationToken?: string;

            /** Embed Token of ReportingService
             */
            embedToken?: string;

            /** Action type of AJAX call back
             */
            actionType?: string;

            /** Returns the report designer model
             */
            model?: any;
        }

        export interface AjaxSuccessEventArgs {

            /** Returns the AJAX headers
             */
            headers?: any[];

            /** Returns the success data
             */
            data?: any;

            /** Token of report designer
             */
            reportDesignerToken?: string;

            /** Token of ReportingService
             */
            serviceAuthorizationToken?: string;

            /** Embed Token of ReportingService
             */
            embedToken?: string;

            /** Action type of AJAX call back
             */
            actionType?: string;

            /** Returns the report designer model
             */
            model?: any;
        }

        export interface CreateEventArgs {

            /** true, if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the report designer model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface DestroyEventArgs {

            /** true, if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the report designer model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface NewDataClickEventArgs {

            /** true, if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the report designer model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface OpenReportClickEventArgs {

            /** DOM of the clicked target
             */
            target?: JQuery;

            /** Name of selected item
             */
            select?: string;
        }

        export interface PreviewReportEventArgs {

            /** Contains the instance of Report Viewer component
             */
            reportViewer?: any;

            /** Specifies whether to show or hide preview data dialog
             */
            cancelDataInputDialog?: boolean;

            /** Contains the required data to load the report
             */
            dataSets?: any[];
        }

        export interface ReportModifiedEventArgs {

            /** Specifies whether the report is modified or not
             */
            isModified?: boolean;

            /** Name of Opened Report
             */
            reportName?: string;
        }

        export interface ReportOpenedEventArgs {

            /** Specifies whether report opened from device or server
             */
            isServerReport?: boolean;

            /** Name of Opened Report
             */
            reportName?: string;
        }

        export interface ReportSavedEventArgs {

            /** Specifies whether report opened from device or server
             */
            isServerReport?: boolean;

            /** States whether report is downloaded from ReportServer
             */
            reportAction?: string;
        }

        export interface SaveReportClickEventArgs {

            /** DOM of the clicked target
             */
            target?: JQuery;

            /** Name of selected item
             */
            select?: string;
        }

        export interface ToolbarClickEventArgs {

            /** DOM of the clicked target
             */
            target?: JQuery;

            /** Name of clicked item
             */
            click?: string;
        }

        export interface ToolbarRenderingEventArgs {

            /** true, if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns toolbar element.
             */
            target?: JQuery;

            /** Returns the report designer model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface EncryptDataEventArgs {

            /** The plain text data to be encrypted.
             */
            data?: string;

            /** true, if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the report designer model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface DecryptDataEventArgs {

            /** The ciphertext data to be decrypted.
             */
            data?: string;

            /** true, if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** Returns the report designer model
             */
            model?: any;

            /** Returns the name of the event
             */
            type?: string;
        }

        export interface ConfigurePaneSettings {

            /** Shows or hides the grouped items in the configuration pane with the help of ej.ReportDesigner.ConfigureItems enum.
             * @Default {ej.ReportDesigner.ConfigureItems.All}
             */
            items?: ej.ReportDesigner.ConfigureItems | string;

            /** Shows or hides the configuration pane in ReportDesigner control.
             * @Default {true}
             */
            showPane?: boolean;
        }

        export interface DataSource {

            /** Gets or sets the name of the data source.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets the values of data source.
             * @Default {[ ]}
             */
            value?: any[];
        }

        export interface ExportSettings {

            /** Specifies the export formats.
             * @Default {ej.ReportViewer.ExportOptions.All}
             */
            exportOptions?: ej.ReportViewer.ExportOptions | string;

            /** Specifies the excel export format.
             * @Default {ej.ReportViewer.ExcelFormats.Excel2013}
             */
            excelFormat?: ej.ReportViewer.ExcelFormats | string;

            /** Specifies the word export format.
             * @Default {ej.ReportViewer.WordFormats.Docx}
             */
            wordFormat?: ej.ReportViewer.WordFormats | string;

            /** Add the custom icon item to the export options.
             * @Default {empty}
             */
            customItems?: any[];
        }

        export interface PageSettings {

            /** Specifies the print layout orientation.
             * @Default {null}
             */
            orientation?: ej.ReportViewer.Orientation | string;

            /** Specifies the paper size of print layout.
             * @Default {null}
             */
            paperSize?: ej.ReportViewer.PaperSize | string;

            /** Specifies the height of print layout.
             * @Default {0}
             */
            height?: number;

            /** Specifies the width of print layout.
             * @Default {0}
             */
            width?: number;

            /** Specifies the margins of print layout.
             * @Default {}
             */
            margins?: any;

            /** Enables and disables the page orientation in page settings.
             * @Default {false}
             */
            hidePageOrientation?: boolean;
        }

        export interface Parameters {

            /** Gets or sets the parameter labels.
             * @Default {null}
             */
            labels?: any[];

            /** Gets or sets the name of the parameter.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets whether the parameter allows nullable value or not.
             * @Default {false}
             */
            nullable?: boolean;

            /** Gets or sets the prompt message associated with the specified parameter.
             * @Default {empty}
             */
            prompt?: string;

            /** Gets or sets the parameter values.
             * @Default {[ ]}
             */
            values?: any[];
        }

        export interface ParameterSettings {

            // tslint:disable:max-line-length
            /** Sets the separator when the multiSelectMode with delimiter option or checkbox is enabled with the dropdown. When you enter the delimiter value, the texts after the delimiter are
             * considered as a separate word or query. The delimiter string is a single character and must be a symbol. Mostly, the delimiter symbol is used as comma (,) or semi-colon (;) or
             * any other special character.
             * @Default {','}
             */
            // tslint:enable:max-line-length
            delimiterChar?: string;

            /** Specifies the height of the combobox parameter popup list. By default, the popup height value is 152px.
             * @Default {'152px'}
             */
            popupHeight?: string;

            // tslint:disable:max-line-length
            /** Specifies the width of the combobox parameter popup list. By default, the popup width sets based on the width of the component.
             * @Default {'auto'}
             */
            // tslint:enable:max-line-length
            popupWidth?: string;

            /** Specifies the width of the parameter item. By default, the item width value is set as 185px.
             * @Default {'185px'}
             */
            itemWidth?: string;

            /** Specifies the width of the parameter label. By default, the parameter label width value is set as 110px.
             * @Default {auto}
             */
            labelWidth?: string;
        }

        export interface PermissionSettings {

            // tslint:disable:max-line-length
            /** Shows or hides the create, edit, and delete options for embedded and shared dataset from dataset pane with the help of ej.ReportDesigner.Permission enum.
             * @Default {ej.ReportDesigner.Permission.All}
             */
            // tslint:enable:max-line-length
            dataSet?: ej.ReportDesigner.Permission | string;

            // tslint:disable:max-line-length
            /** Shows or hides the create, edit, and delete options for embedded and shared data source from data source pane with the help of ej.ReportDesigner.Permission enum
             * @Default {ej.ReportDesigner.Permission.All}
             */
            // tslint:enable:max-line-length
            dataSource?: ej.ReportDesigner.Permission | string;
        }

        export interface PreviewOptions {

            /** Enables and disables the rendering of Viewer when default values are specified for the parameters.
             * @Default {true}
             */
            autoRender?: boolean;

            /** Gets or sets the list of data sources to preview RDL report from Report Designer.
             * @Default {}
             */
            dataSources?: DataSource[];

            /** Enables and disables the Error Notification bar.
             * @Default {true}
             */
            enableNotificationBar?: boolean;

            // tslint:disable:max-line-length
            /** Set the property value as true to enable the processing of a large amount of data with a lesser memory footprint and without performance degradation.
             * @Default {false}
             */
            // tslint:enable:max-line-length
            enableVirtualEvaluation?: boolean;

            /** Enables and disables the parameter block scroller in Report Viewer component .
             * @Default {true}
             */
            enableParameterBlockScroller?: boolean;

            /** Enables and disables the data source credential block scroller.
             * @Default {true}
             */
            enableDatasourceBlockScroller?: boolean;

            /** Enables and disables the drop-down parameter search.
             * @Default {false}
             */
            enableDropDownSearch?: boolean;

            /** Specifies the export settings for Report Viewer component.
             * @Default {}
             */
            exportSettings?: ExportSettings;

            /** Specifies the page settings.
             * @Default {}
             */
            pageSettings?: PageSettings;

            /** Gets or sets the list of parameters associated with the report.
             * @Default {}
             */
            parameters?: Parameters;

            /** Specifies the parameter settings.
             * @Default {}
             */
            parameterSettings?: ParameterSettings;

            /** Enables and disables the print mode.
             * @Default {false}
             */
            printMode?: boolean;

            /** Specifies the print option of the report.
             * @Default {ej.ReportViewer.PrintOptions.Default}
             */
            printOption?: ej.ReportViewer.PrintOptions | string;

            /** Render the Report Viewer height based on the report content size.
             * @Default {false}
             */
            sizeToReportContent?: boolean;

            /** Specifies the toolbar settings.
             * @Default {}
             */
            toolbarSettings?: ToolbarSettings;

            /** Gets or sets the zoom factor for report viewer.
             * @Default {1}
             */
            zoomFactor?: number;

            // tslint:disable:max-line-length
            /** Set the property value as true to enable the cross domain cookies exchange for sticking the user's session in cross domain request.
             * @Default {false}
             */
            // tslint:enable:max-line-length
            enableCrossDomainCookies?: boolean;

            /** Enables and disables tooltips for all y-axis values when hovering over a point on the x-axis.
             * @Default {false}
             */
            enableCrossAxisTooltip?: boolean;
        }

        export interface ReportDataExtension {

            /** Gets or sets the name of the datasource type.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets the class name of the data extension.
             * @Default {empty}
             */
            className?: string;

            /** Gets or sets the image class name to load image in data pane tile.
             * @Default {}
             */
            imageClass?: string;

            /** Gets or sets the name for data extension item to display in the data pane tile.
             * @Default {empty}
             */
            displayName?: string;
        }

        export interface ReportItemExtension {

            /** Gets or sets the name for the report item.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets the class name of the report item.
             * @Default {empty}
             */
            className?: string;

            /** Gets or sets the image class name to load image in widgets pane tile.
             * @Default {empty}
             */
            imageClass?: string;

            /** Gets or sets the name for custom report item to display in the widgets pane tile.
             * @Default {empty}
             */
            displayName?: string;

            /** Gets or sets the category name for the report item.
             * @Default {empty}
             */
            category?: string;

            /** Set the property to false to restrict placing the report item in the header and footer.
             * @Default {true}
             */
            allowHeaderFooter?: boolean;
        }

        export interface ToolbarSettings {

            /** Shows or hides the grouped items in the toolbar with the help of ej.ReportDesigner.ToolbarItems enum.
             * @Default {ej.ReportDesigner.ToolbarItems.All}
             */
            items?: ej.ReportDesigner.ToolbarItems | string;

            /** Shows or hides the toolbar.
             * @Default {true}
             */
            showToolbar?: boolean;

            /** Specifies the toolbar template ID.
             * @Default {empty}
             */
            templateId?: string;
        }

        enum ConfigureItems {
            //Shows or hides the properties panel in configuration pane
            Property,
            //Shows or hides the data panel in configuration pane
            Data,
            //Shows or hides the parameter panel in configuration pane
            Parameter,
            //Shows or hides the image manager panel in configuration pane
            ImageManager,
            //Shows all the configuration pane items
            All,
        }

        enum ExportOptions {
            //Specifies the All property in ExportOptions to get all available options.
            All,
            //Specifies the Pdf property in ExportOptions to get Pdf option.
            Pdf,
            //Specifies the Word property in ExportOptions to get Word option.
            Word,
            //Specifies the Excel property in ExportOptions to get Excel option.
            Excel,
            //Specifies the Html property in ExportOptions to get Html option.
            Html,
            //Specifies the PPT property in ExportOptions to get PPT option.
            PPT,
            //Specifies the CSV property in ExportOptions to get CSV option.
            CSV,
            //Specifies the XML property in ExportOptions to get XML option.
            XML,
            //Specifies the TXT property in ExportOptions to get TXT option.
            TXT,
            //Specifies the customItems property in ExportOptions to get customItems option.
            CustomItems,
        }

        enum ExcelFormats {
            //Specifies the Excel97to2003 property in ExcelFormats to get specified version of exported format.
            Excel97to2003,
            //Specifies the Excel2007 property in ExcelFormats to get specified version of exported format.
            Excel2007,
            //Specifies the Excel2010 property in ExcelFormats to get specified version of exported format.
            Excel2010,
            //Specifies the Excel2013 property in ExcelFormats to get specified version of exported format.
            Excel2013,
        }

        enum WordFormats {
            //Specifies the Doc property in WordFormats to get specified version of exported format.
            Doc,
            //Specifies the Dot property in WordFormats to get specified version of exported format.
            Dot,
            //Specifies the DOCX property in WordFormats to get specified version of exported format.
            DOCX,
            //Specifies the Word2007 property in WordFormats to get specified version of exported format.
            Word2007,
            //Specifies the Word2010 property in WordFormats to get specified version of exported format.
            Word2010,
            //Specifies the Word2013 property in WordFormats to get specified version of exported format.
            Word2013,
            //Specifies the Word2007Dotx property in WordFormats to get specified version of exported format.
            Word2007Dotx,
            //Specifies the Word2010Dotx property in WordFormats to get specified version of exported format.
            Word2010Dotx,
            //Specifies the Word2013Dotx property in WordFormats to get specified version of exported format.
            Word2013Dotx,
            //Specifies the Word2007Docm property in WordFormats to get specified version of exported format.
            Word2007Docm,
            //Specifies the Word2010Docm property in WordFormats to get specified version of exported format.
            Word2010Docm,
            //Specifies the Word2013Docm property in WordFormats to get specified version of exported format.
            Word2013Docm,
            //Specifies the Word2007Dotm property in WordFormats to get specified version of exported format.
            Word2007Dotm,
            //Specifies the Word2010Dotm property in WordFormats to get specified version of exported format.
            Word2010Dotm,
            //Specifies the Word2013Dotm property in WordFormats to get specified version of exported format.
            Word2013Dotm,
            //Specifies the RTF property in WordFormats to get specified version of exported format.
            RTF,
            //Specifies the Txt property in WordFormats to get specified version of exported format.
            Txt,
            //Specifies the EPUB property in WordFormats to get specified version of exported format.
            EPUB,
            //Specifies the HTML property in WordFormats to get specified version of exported format.
            HTML,
            //Specifies the XML property in WordFormats to get specified version of exported format.
            XML,
            //Specifies the Automatic property in WordFormats to get specified version of exported format.
            Automatic,
        }

        enum Orientation {
            //Specifies the Landscape property in pageSettings.orientation to get specified layout.
            Landscape,
            //Specifies the portrait property in pageSettings.orientation to get specified layout.
            Portrait,
        }

        enum PaperSize {
            //Specifies the A3 as value in pageSettings.paperSize to get specified size.
            A3,
            //Specifies the A4 as value in pageSettings.paperSize to get specified size.
            A4,
            //Specifies the B4(JIS) as value in pageSettings.paperSize to get specified size.
            B4_JIS,
            //Specifies the B5(JIS) as value in pageSettings.paperSize to get specified size.
            B5_JIS,
            //Specifies the Envelope #10 as value in pageSettings.paperSize to get specified size.
            Envelope_10,
            //Specifies the Envelope as value in pageSettings.paperSize to get specified size.
            Envelope_Monarch,
            //Specifies the Executive as value in pageSettings.paperSize to get specified size.
            Executive,
            //Specifies the Legal as value in pageSettings.paperSize to get specified size.
            Legal,
            //Specifies the Letter as value in pageSettings.paperSize to get specified size.
            Letter,
            //Specifies the Tabloid as value in pageSettings.paperSize to get specified size.
            Tabloid,
            //Specifies the Custom as value in pageSettings.paperSize to get specified size.
            Custom,
        }

        enum Permission {
            //Shows or hides embedded dataset option in dataset pane
            Create,
            //Shows or hides the edit option in dataset pane
            Edit,
            //Shows or hides the delete option in dataset pane
            Delete,
            //Shows or hides the shared dataset option in dataset pane
            Shared,
            //Shows all the options in dataset pane
            All,
        }

        enum PrintOptions {
            //Specifies the Default property in printOptions.
            Default,
            //Specifies the NewTab property in printOptions.
            NewTab,
            //Specifies the None property in printOptions.
            None,
        }

        enum ToolbarItems {
            //Creates a new, blank report.
            New,
            //Displays the Open dialog box to retrieve an existing report.
            Open,
            //Saves the active report to a specified location.
            Save,
            //Removes the selected item from the active report.
            Cut,
            //Copies selected text or object to the Report Designer internal clipboard
            Copy,
            // tslint:disable-next-line:max-line-length
            //Pastes the item that cut or copied into (the position of the insertion point) the report from the Report Designer internal clipboard
            Paste,
            //Deletes the selected item or text from the report.
            Delete,
            //Reverses the last action or deletes the last entry that is typed.
            Undo,
            //Reverses the action of the last Undo command.
            Redo,
            // tslint:disable-next-line:max-line-length
            //Used to &quot;zoom in&quot; to get a close-up view of a report or &quot;zoom out&quot; to see more of the page at a reduced size
            Zoom,
            //Used to change the layout order of report items in design area surface
            Order,
            //Aligns the selected report item in the design surface
            Alignment,
            //Equally size the selected report items in the design surface.
            Sizing,
            //Snaps the selected report items to the closest gridline.
            AlignGrid,
            //Switches from preview to design view of the report.
            EditDesign,
            //Contains options to show or hide Header, Footer, Grid Lines, Snap To Shape in the report design.
            View,
            //Previews the active report in report viewer.
            Preview,
            //Shows all the toolbar items.
            All,
        }

        enum DataTab {
            //Sets the datasource panel as default tab in data panel.
            Datasource,
            //Sets the dataset panel as default tab in data panel.
            Dataset,
        }

        enum ReportType {
            //Renders designer in RDL mode.
            RDL,
            //Renders designer in RDLC mode.
            RDLC,
        }

        enum ZoomFactor {
            //25
            Z_25,
            //50
            Z_50,
            //75
            Z_75,
            //100
            Z_100,
            //150
            Z_150,
            //200
            Z_200,
            //250
            Z_250,
            //300
            Z_300,
            //350
            Z_350,
            //400
            Z_400,
        }

        enum DataFormat {
            //Returns the report data in JSON format.
            JSON,
            //Return the report data in XML format.
            XML,
        }

        enum BrowseType {
            //Mention the browse type as Open to launch open report dialog.
            Open,
            //Mention the browse type as Save to launch save report dialog.
            Save,
        }
    }
    class ReportViewer extends ej.Widget {
        public static fn: ReportViewer;
        constructor(element: JQuery | Element, options?: ReportViewer.Model);
        public static locale: any;
        public model: ReportViewer.Model;
        public defaults: ReportViewer.Model;

        /** Destroy the client and server side report viewer processing objects.
         * @returns {void}
         */
        public destroy(): void;

        /** Export the report to the specified format.
         * @param {string} Indicates to choose the export type while exporting like PDF or Excel or Word and etc.
         * @returns {void}
         */
        public exportReport(show: string): void;

        /** Fit the report page to the container.
         * @returns {void}
         */
        public fitToPage(): void;

        /** Fit the report page height to the container.
         * @returns {void}
         */
        public fitToPageHeight(): void;

        /** Fit the report page width to the container.
         * @returns {void}
         */
        public fitToPageWidth(): void;

        /** Get the available datasets name of the rdlc report.
         * @returns {void}
         */
        public getDataSetNames(): void;

        /** Get the available parameters of the report.
         * @returns {void}
         */
        public getParameters(): void;

        /** Navigate to first page of report.
         * @returns {void}
         */
        public gotoFirstPage(): void;

        /** Navigate to last page of the report.
         * @returns {void}
         */
        public gotoLastPage(): void;

        /** Navigate to next page from the current page.
         * @returns {void}
         */
        public gotoNextPage(): void;

        /** Go to specific page index of the report.
         * @param {number} Indicates to pass the page number to show the page directly instead of starting from first page.
         * @returns {void}
         */
        public gotoPageIndex(show: number): void;

        /** Navigate to previous page from the current page.
         * @returns {void}
         */
        public gotoPreviousPage(): void;

        /** Print the report.
         * @returns {void}
         */
        public print(): void;

        /** Apply print layout to the report.
         * @returns {void}
         */
        public printLayout(): void;

        /** Refresh the report.
         * @returns {void}
         */
        public refresh(): void;

        /** Specify the visibility of parameter block.
         * @param {boolean} Indicates whether the parameter block needs to be shown or not.
         * @returns {void}
         */
        public setParameterBlockVisibility(show: boolean): void;

        /** Cancel the report processing.
         * @returns {void}
         */
        public cancelRendering(): void;
    }
    export namespace ReportViewer {

        export interface Model {

            /** Gets or sets the list of data sources for the RDLC report.
             * @Default {[]}
             */
            dataSources?: DataSource[];

            /** Specifies the export settings.
             */
            exportSettings?: ExportSettings;

            /** When set to true, adapts the report layout to fit the screen size of devices on which it renders.
             * @Default {true}
             */
            isResponsive?: boolean;

            /** Specifies the locale for report viewer.
             * @Default {en-US}
             */
            locale?: string;

            /** Specifies the page settings.
             */
            pageSettings?: PageSettings;

            /** Gets or sets the list of parameters associated with the report.
             * @Default {[]}
             */
            parameters?: Parameter[];

            /** Gets or sets the list of extended attributes associated with the report.
             * @Default {null}
             */
            extendedAttributes?: Object;

            /** Specifies the toolbar settings.
             */
            toolbarSettings?: ToolbarSettings;

            /** Specifies the parameter settings.
             */
            parameterSettings?: ParameterSettings;

            /** Enables and disables the print mode.
             * @Default {false}
             */
            printMode?: boolean;

            /** Specifies the print option of the report.
             * @Default {ej.ReportViewer.PrintOptions.Default}
             */
            printOption?: ej.ReportViewer.PrintOptions | string;

            /** Specifies the processing mode of the report.
             * @Default {ej.ReportViewer.ProcessingMode.Remote}
             */
            processingMode?: ej.ReportViewer.ProcessingMode | string;

            /** Specifies the render layout.
             * @Default {ej.ReportViewer.RenderMode.Default}
             */
            renderMode?: ej.ReportViewer.RenderMode | string;

            /** Gets or sets the path of the report file.
             * @Default {empty}
             */
            reportPath?: string;

            /** Gets or sets the reports server URL.
             * @Default {empty}
             */
            reportServerUrl?: string;

            /** Specifies the report Web API service URL.
             * @Default {empty}
             */
            reportServiceUrl?: string;

            /** Gets or sets the zoom factor for report viewer.
             * @Default {1}
             */
            zoomFactor?: number;

            /** Specifies the token for authorizing reporting service URL to process the reports.
             * @Default {empty}
             */
            serviceAuthorizationToken?: string;

            // tslint:disable:max-line-length
            /** Specifies the token that contains authorization token, report parameters, custom attributes and user information to process the reports.
             * @Default {empty}
             */
            // tslint:enable:max-line-length
            embedToken?: string;

            /** Specifies the toolbar render mode of the report.
             * @Default {ej.ReportViewer.ToolbarRenderMode.Native}
             */
            toolbarRenderMode?: ej.ReportViewer.ToolbarRenderMode | string;

            /** Enables and disables the parameter block scroller.
             * @Default {true}
             */
            enableParameterBlockScroller?: boolean;

            /** Enables and disables the data source credential block scroller.
             * @Default {true}
             */
            enableDatasourceBlockScroller?: boolean;

            /** Render the Report Viewer height based on the report content size.
             * @Default {false}
             */
            sizeToReportContent?: boolean;

            /** Enables and disables the rendering of Viewer when default values are specified for the parameters.
             * @Default {true}
             */
            autoRender?: boolean;

            /** Enables and disables the Error Notification bar.
             * @Default {true}
             */
            enableNotificationBar?: boolean;

            /** Enables and disables the drop-down parameter search.
             * @Default {false}
             */
            enableDropDownSearch?: boolean;

            // tslint:disable:max-line-length
            /** Set the property value as true to enable the processing of a large amount of data with a lesser memory footprint and without performance degradation.
             * @Default {false}
             */
            // tslint:enable:max-line-length
            enableVirtualEvaluation?: boolean;

            /** Set the property value as true to enable to render the millions of records in seconds.
             * @Default {false}
             */
            smartRendering?: boolean;

            /** Gets or sets the waiting popup template for the Report viewer.
             * @Default {null}
             */
            waitingPopupTemplate?: String;

            /** Set the property value as true to enable the processing of a navigating next and previous page using scroller.
             * @Default {false}
             */
            enableOnScrollNavigation?: boolean;

            /** Specifies the customBrandSettings.
             */
            customBrandSettings?: CustomBrandSettings;

            // tslint:disable:max-line-length
            /** Set the property value as true to enable the cross domain cookies exchange for sticking the user's session in cross domain request.
             * @Default {false}
             */
            // tslint:enable:max-line-length
            enableCrossDomainCookies?: boolean;

            /** Enables and disables tooltips for all y-axis values when hovering over a point on the x-axis.
             * @Default {false}
             */
            enableCrossAxisTooltip?: boolean;

            // tslint:disable:max-line-length
            /** Fires during drill through action done in report. If you want to perform any operation when a drill through action is performed, you can make use of the drillThrough event.
             */
            // tslint:enable:max-line-length
            drillThrough?(e: DrillThroughEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires before report rendering is completed. If you want to perform any operation before the rendering of report,you can make use of the renderingBegin event.
             */
            // tslint:enable:max-line-length
            renderingBegin?(e: RenderingBeginEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires after report rendering completed. If you want to perform any operation after the rendering of report,you can make use of this renderingComplete event.
             */
            // tslint:enable:max-line-length
            renderingComplete?(e: RenderingCompleteEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when any error occurred while rendering the report. If you want to perform any operation when an error occurs in the report, you can make use of the reportError event.
             */
            // tslint:enable:max-line-length
            reportError?(e: ReportErrorEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when the report is being exported. If you want to perform any operation before exporting of report, you can make use of the reportExport event.
             */
            // tslint:enable:max-line-length
            reportExport?(e: ReportExportEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when the report is loaded. If you want to perform any operation after the successful loading of report, you can make use of the reportLoaded event.
             */
            // tslint:enable:max-line-length
            reportLoaded?(e: ReportLoadedEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when report processing is canceled. You can use the reportCanceled event to perform any action after canceling either the report viewer process or the export process.
             */
            // tslint:enable:max-line-length
            reportCanceled?(e: ReportCanceledEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when user clicks on a failed report item in the rendered report, before displaying error details dialog. If you want to show custom error detail or perform any action before
             * viewing error detail, you can make use of the showError event.
             */
            // tslint:enable:max-line-length
            showError?(e: ShowErrorEventArgs): void;

            /** Fires when click the View Report Button.
             */
            viewReportClick?(e: ViewReportClickEventArgs): void;

            /** Fires before the AJAX request process started.
             */
            ajaxBeforeLoad?(e: AjaxBeforeLoadEventArgs): void;

            /** Fires when AJAX post call succeed.
             */
            ajaxSuccess?(e: AjaxSuccessEventArgs): void;

            /** Fires when AJAX request failed.
             */
            ajaxError?(e: AjaxErrorEventArgs): void;

            /** This event will be triggered on rendering the report viewer toolbar.
             */
            toolbarRendering?(e: ToolbarRenderingEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when the export progress is changed. To perform any operation when the export progress is changed, use the exportProgressChanged event.
             */
            // tslint:enable:max-line-length
            exportProgressChanged?(e: ExportProgressChangedEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when the print progress is changed. To perform any operation when the print progress is changed, use the printProgressChanged event.
             */
            // tslint:enable:max-line-length
            printProgressChanged?(e: PrintProgressChangedEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when the export items are clicked. To perform any operation when the export items are clicked, use the exportItemClick event.
             */
            // tslint:enable:max-line-length
            exportItemClick?(e: ExportItemClickEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when the toolbar items are clicked. To perform any operation when the toolbar items are clicked, use the toolBarItemClick event.
             */
            // tslint:enable:max-line-length
            toolBarItemClick?(e: ToolBarItemClickEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when the hyperlink action is performed in the report. To perform any operation during the hyperlink action, use the hyperlink event.
             */
            // tslint:enable:max-line-length
            hyperlink?(e: HyperlinkEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when the report print action is performed in the report. To perform any operation during the report print action, use the ReportPrint event.
             */
            // tslint:enable:max-line-length
            reportPrint?(e: ReportPrintEventArgs): void;

            // tslint:disable:max-line-length
            /** Fires when begin to add the parameter element in the report viewer parameter block. To perform any changes in parameter element, use the beforeParameterAdd event.
             */
            // tslint:enable:max-line-length
            beforeParameterAdd?(e: BeforeParameterAddEventArgs): void;
        }

        export interface DrillThroughEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the actionInfo's parameters bookmarkLink, reportName, parameters.
             */
            actionInfo?: any;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface RenderingBeginEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface RenderingCompleteEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;

            /** returns the collection of parameters.
             */
            reportParameters?: any;
        }

        export interface ReportErrorEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the error details.
             */
            error?: string;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ReportExportEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ReportLoadedEventArgs {

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ReportCanceledEventArgs {

            /** returns the process where either viewer processing or export processing is canceled.
             */
            process?: string;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ShowErrorEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the error code.
             */
            errorCode?: string;

            /** returns the error message.
             */
            message?: string;

            /** returns the detailed error information.
             */
            detail?: string;
        }

        export interface ViewReportClickEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the parameter collection.
             */
            parameters?: any;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface AjaxBeforeLoadEventArgs {

            /** returns the reportViewerToken.
             */
            reportViewerToken?: string;

            /** returns the serviceAuthorizationToken.
             */
            serviceAuthorizationToken?: string;

            /** Send the header request collection.
             */
            headerReq?: any;

            /** Send the headers collection.
             */
            headers?: any;

            /** Send the custom data.
             */
            data?: string;

            /** Change the Web API action with custom endpoint.
             */
            actionName?: string;
        }

        export interface AjaxSuccessEventArgs {

            /** returns the success data.
             */
            data?: any;
        }

        export interface AjaxErrorEventArgs {

            /** returns the error details
             */
            msg?: string;
        }

        export interface ToolbarRenderingEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;

            /** returns the toolbar container.
             */
            target?: JQuery;
        }

        export interface ExportProgressChangedEventArgs {

            /** returns the export format
             */
            format?: string;

            /** returns the stage of export processing.
             */
            stage?: string;

            /** true if the event should be handled; otherwise, false.
             */
            handled?: boolean;

            /** returns report viewer container Id.
             */
            containerId?: string;

            /** Set the waitingPopupTemplate in report viewer.
             */
            waitingPopupTemplate?: string;

            /** Change the Web API action with custom endpoint.
             */
            actionName?: string;
        }

        export interface PrintProgressChangedEventArgs {

            /** returns the stage of export processing.
             */
            stage?: string;

            /** returns the currentPage value
             */
            currentPage?: string;

            /** returns the totalPages value
             */
            totalPages?: string;

            /** true if the event should be handled; otherwise, false.
             */
            handled?: boolean;

            /** returns report viewer container Id.
             */
            containerId?: string;

            /** Set the waitingPopupTemplate in report viewer.
             */
            waitingPopupTemplate?: string;
        }

        export interface ExportItemClickEventArgs {

            /** returns the export format value.
             */
            value?: string;
        }

        export interface ToolBarItemClickEventArgs {

            /** returns the toolbar clicked item name .
             */
            target?: string;

            /** returns the CSS class name specified for the toolbar item
             */
            cssClass?: string;

            /** returns the Toolbar item rendered group index
             */
            groupIndex?: string;

            /** returns the Toolbar item rendered index
             */
            Index?: string;

            /** returns the Toolbar item value.
             */
            value?: string;
        }

        export interface HyperlinkEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the actionInfo's hyperLink detail
             */
            actionInfo?: any;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ReportPrintEventArgs {

            /** true if you have to load the external style file; otherwise, false.
             */
            isStyleLoad?: boolean;
        }

        export interface BeforeParameterAddEventArgs {

            /** returns the parameter model.
             */
            parameterModel?: any;

            /** returns the current report parameter container id
             */
            containerId?: string;

            /** true if the event should be handled; otherwise, false.
             */
            handled?: boolean;

            /** returns the parameter settings.
             */
            parameterSettings?: any;

            /** set custom properties to the report parameter.
             */
            customProperties?: any;
        }

        export interface CustomBrandSettings {

            /** Shows or hides the link of customBrandSettings.
             * @Default {false}
             */
            link?: boolean;

            /** Gets or sets the domain of the customBrandSettings.
             * @Default {empty}
             */
            domain?: string;

            /** Gets or sets the name of the customBrandSettings.
             * @Default {empty}
             */
            name?: string;

            /** Add the links to the customBrandSettings.
             * @Default {empty}
             */
            links?: any[];
        }

        export interface DataSource {

            /** Gets or sets the name of the data source.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets the values of data source.
             * @Default {[]}
             */
            value?: any[];
        }

        export interface ExportSettings {

            /** Specifies the export formats.
             * @Default {ej.ReportViewer.ExportOptions.All}
             */
            exportOptions?: ej.ReportViewer.ExportOptions | string;

            /** Specifies the excel export format.
             * @Default {ej.ReportViewer.ExcelFormats.Excel2013}
             */
            excelFormat?: ej.ReportViewer.ExcelFormats | string;

            /** Specifies the word export format.
             * @Default {ej.ReportViewer.WordFormats.Docx}
             */
            wordFormat?: ej.ReportViewer.WordFormats | string;

            /** Add the custom icon item to the export options.
             * @Default {empty}
             */
            customItems?: any[];

            /** Sets the image quality of data visualization items in report export. It allows value range from 1 to 10.
             * @Default {2}
             */
            ImageQuality?: number;

            /** Set the property value as true to reflect Report Viewer print page settings in the report export document.
             * @Default {false}
             */
            UsePrintSizes?: boolean;

            /** Set the property value as 1 to enable ignore cell merge for Excel layout option in the report export document.
             * @Default {0}
             */
            LayoutOption?: number;
        }

        export interface PageSettings {

            /** Specifies the print layout orientation.
             * @Default {null}
             */
            orientation?: ej.ReportViewer.Orientation | string;

            /** Specifies the paper size of print layout.
             * @Default {null}
             */
            paperSize?: ej.ReportViewer.PaperSize | string;

            /** Specifies the height of print layout.
             * @Default {0}
             */
            height?: number;

            /** Specifies the width of print layout.
             * @Default {0}
             */
            width?: number;

            /** Specifies the margins of print layout.
             * @Default {}
             */
            margins?: any;

            /** Enables or disables the page orientation in the page settings.
             * @Default {false}
             */
            hidePageOrientation?: boolean;

            /** Hide paper sizes with comma separated values
             * @Default {empty}
             */
            hidePagePaperSizes?: any[];
        }

        export interface Parameter {

            /** Gets or sets the parameter labels.
             * @Default {null}
             */
            labels?: any[];

            /** Gets or sets the name of the parameter.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets whether the parameter allows nullable value or not.
             * @Default {false}
             */
            nullable?: boolean;

            /** Gets or sets the prompt message associated with the specified parameter.
             * @Default {empty}
             */
            prompt?: string;

            /** Gets or sets the parameter values.
             * @Default {[]}
             */
            values?: any[];
        }

        export interface ParameterSettings {

            // tslint:disable:max-line-length
            /** Sets the separator when the multiSelectMode with delimiter option or checkbox is enabled with the dropdown. When you enter the delimiter value, the texts after the delimiter are
             * considered as a separate word or query. The delimiter string is a single character and must be a symbol. Mostly, the delimiter symbol is used as comma (,) or semi-colon (;) or
             * any other special character.
             * @Default {','}
             */
            // tslint:enable:max-line-length
            delimiterChar?: string;

            /** Specifies the parameter panel docking position.
This support applicable only in Classic view.
             * @Default {ej.ReportViewer.Position.Top}
             */
            position?: ej.ReportViewer.Position | string;

            /** Specifies the height of the combobox parameter popup list. By default, the popup height value is 152px.
             * @Default {152px}
             */
            popupHeight?: string;

            // tslint:disable:max-line-length
            /** Specifies the width of the combobox parameter popup list. By default, the popup width sets based on the width of the component.
             * @Default {'auto'}
             */
            // tslint:enable:max-line-length
            popupWidth?: string;

            /** Specifies the width of the parameter item. By default, the item width value is set as 185px.
             * @Default {185px}
             */
            itemWidth?: string;

            /** Specifies the width of the parameter label. By default, the parameter label width value is set as 110px.
             * @Default {110px}
             */
            labelWidth?: string;

            /** Specifies the minimum date in the date parameter that the user can select. By default, the minDateTime value is set as null
             * @Default {null}
             */
            minDateTime?: string;

            /** Specifies the maximum date in the date parameter that the user can select. By default, the maxDateTime value is set as null
             * @Default {null}
             */
            maxDateTime?: string;

            /** Show or hide the parameter tooltip on report initial rendering.
             * @Default {false}
             */
            hideTooltip?: boolean;

            /** Show or hide the parameter popup re-size on report initial rendering.
             * @Default {false}
             */
            enablePopupResize?: boolean;

            /** Show or hide the parameter block on report initial rendering.
             * @Default {false}
             */
            hideParameterBlock?: boolean;

            /** Defines the date time format displayed in the DateTimePicker. By default, the dateTimeFormat value is set as empty.
             * @Default {empty}
             */
            dateTimeFormat?: string;

            // tslint:disable:max-line-length
            /** Defines the time format displayed in the time dropdown inside the DateTimePicker popup. By default, the timeDisplayFormat value is set as empty.
             * @Default {empty}
             */
            // tslint:enable:max-line-length
            timeDisplayFormat?: string;

            // tslint:disable:max-line-length
            /** Sets the time interval between the two adjacent time values in the DateTimePicker time popup. By default, the timeInterval value is set as 30.
             * @Default {30}
             */
            // tslint:enable:max-line-length
            timeInterval?: number;

            // tslint:disable:max-line-length
            /** Specifies whether the hidden or internal report parameters can be exposed to user or not. By default, the value is set as false and only the public visibility parameters are
             * exposed outside.
             * @Default {false}
             */
            // tslint:enable:max-line-length
            accessInternalValue?: boolean;
        }

        export interface ToolbarSettings {

            /** Fires when user click on toolbar item in the toolbar.
             * @Default {empty}
             */
            click?: string;

            /** Specifies the toolbar items.
             * @Default {null}
             */
            items?: ej.ReportViewer.ToolbarItems | string;

            /** Specifies the toolbars.
             * @Default {All}
             */
            toolbars?: ej.ReportViewer.Toolbars | string;

            /** Shows or hides the toolbar.
             * @Default {true}
             */
            showToolbar?: boolean;

            /** Shows or hides the tooltip of toolbar items.
             * @Default {true}
             */
            showTooltip?: boolean;

            /** Enable or Disable auto hide for horizontal toolbar.
             * @Default {true}
             */
            autoHide?: boolean;

            /** Set auto hide time delay for horizontal toolbar.
             * @Default {5}
             */
            autoHideDelay?: number;

            /** Specifies the toolbar template ID.
             * @Default {empty}
             */
            templateId?: string;

            /** Add the custom icon item to the toolbar.
             * @Default {empty}
             */
            customItems?: any[];

            /** Add the custom icon groups to the toolbar.
             * @Default {empty}
             */
            customGroups?: any[];
        }

        enum ExportOptions {
            //Specifies the All property in ExportOptions to get all available options.
            All,
            //Specifies the Pdf property in ExportOptions to get Pdf option.
            Pdf,
            //Specifies the Word property in ExportOptions to get Word option.
            Word,
            //Specifies the Excel property in ExportOptions to get Excel option.
            Excel,
            //Specifies the Html property in ExportOptions to get Html option.
            Html,
            //Specifies the PPT property in ExportOptions to get PPT option.
            PPT,
            //Specifies the CSV property in ExportOptions to get CSV option.
            CSV,
            //Specifies the XML property in ExportOptions to get XML option.
            XML,
            //Specifies the TXT property in ExportOptions to get TXT option.
            TXT,
            //Specifies the customItems property in ExportOptions to get customItems option.
            CustomItems,
        }

        enum ExcelFormats {
            //Specifies the Excel97to2003 property in ExcelFormats to get specified version of exported format.
            Excel97to2003,
            //Specifies the Excel2007 property in ExcelFormats to get specified version of exported format.
            Excel2007,
            //Specifies the Excel2010 property in ExcelFormats to get specified version of exported format.
            Excel2010,
            //Specifies the Excel2013 property in ExcelFormats to get specified version of exported format.
            Excel2013,
        }

        enum WordFormats {
            //Specifies the Doc property in WordFormats to get specified version of exported format.
            Doc,
            //Specifies the Dot property in WordFormats to get specified version of exported format.
            Dot,
            //Specifies the DOCX property in WordFormats to get specified version of exported format.
            DOCX,
            //Specifies the Word2007 property in WordFormats to get specified version of exported format.
            Word2007,
            //Specifies the Word2010 property in WordFormats to get specified version of exported format.
            Word2010,
            //Specifies the Word2013 property in WordFormats to get specified version of exported format.
            Word2013,
            //Specifies the Word2007Dotx property in WordFormats to get specified version of exported format.
            Word2007Dotx,
            //Specifies the Word2010Dotx property in WordFormats to get specified version of exported format.
            Word2010Dotx,
            //Specifies the Word2013Dotx property in WordFormats to get specified version of exported format.
            Word2013Dotx,
            //Specifies the Word2007Docm property in WordFormats to get specified version of exported format.
            Word2007Docm,
            //Specifies the Word2010Docm property in WordFormats to get specified version of exported format.
            Word2010Docm,
            //Specifies the Word2013Docm property in WordFormats to get specified version of exported format.
            Word2013Docm,
            //Specifies the Word2007Dotm property in WordFormats to get specified version of exported format.
            Word2007Dotm,
            //Specifies the Word2010Dotm property in WordFormats to get specified version of exported format.
            Word2010Dotm,
            //Specifies the Word2013Dotm property in WordFormats to get specified version of exported format.
            Word2013Dotm,
            //Specifies the RTF property in WordFormats to get specified version of exported format.
            RTF,
            //Specifies the Txt property in WordFormats to get specified version of exported format.
            Txt,
            //Specifies the EPUB property in WordFormats to get specified version of exported format.
            EPUB,
            //Specifies the HTML property in WordFormats to get specified version of exported format.
            HTML,
            //Specifies the XML property in WordFormats to get specified version of exported format.
            XML,
        }

        enum Orientation {
            //Specifies the Landscape property in pageSettings.orientation to get specified layout.
            Landscape,
            //Specifies the portrait property in pageSettings.orientation to get specified layout.
            Portrait,
        }

        enum PaperSize {
            //Specifies the A3 as value in pageSettings.paperSize to get specified size.
            A3,
            //Specifies the A4 as value in pageSettings.paperSize to get specified size.
            A4,
            //Specifies the B4(JIS) as value in pageSettings.paperSize to get specified size.
            B4_JIS,
            //Specifies the B5(JIS) as value in pageSettings.paperSize to get specified size.
            B5_JIS,
            //Specifies the Envelope #10 as value in pageSettings.paperSize to get specified size.
            Envelope_10,
            //Specifies the Envelope as value in pageSettings.paperSize to get specified size.
            Envelope_Monarch,
            //Specifies the Executive as value in pageSettings.paperSize to get specified size.
            Executive,
            //Specifies the Legal as value in pageSettings.paperSize to get specified size.
            Legal,
            //Specifies the Letter as value in pageSettings.paperSize to get specified size.
            Letter,
            //Specifies the Tabloid as value in pageSettings.paperSize to get specified size.
            Tabloid,
            //Specifies the Custom as value in pageSettings.paperSize to get specified size.
            Custom,
        }

        enum Position {
            //Specify the value to dock parameter panel in top side.
            Top,
            //Specify the value to dock parameter panel in bottom side.
            Bottom,
            //Specify the value to dock parameter panel in right side.
            Right,
            //Specify the value to dock parameter panel in left side.
            Left,
        }

        enum ToolbarItems {
            //Specifies the Print as value in ToolbarItems to get specified item.
            Print,
            //Specifies the Refresh as value in ToolbarItems to get specified item.
            Refresh,
            //Specifies the Stop as value in ToolbarItems to get specified item.
            Stop,
            //Specifies the Zoom as value in ToolbarItems to get specified item.
            Zoom,
            //Specifies the FittoPage as value in ToolbarItems to get specified item.
            FittoPage,
            //Specifies the Export as value in ToolbarItems to get specified item.
            Export,
            //Specifies the PageNavigation as value in ToolbarItems to get specified item.
            PageNavigation,
            //Specifies the Parameters as value in ToolbarItems to get specified item.
            Parameters,
            //Specifies the PrintLayout as value in ToolbarItems to get specified item.
            PrintLayout,
            //Specifies the PageSetup as value in ToolbarItems to get specified item.
            PageSetup,
            //Specifies the ExportSetup as value in ToolbarItems to get specified item.
            ExportSetup,
            //Specifies the Find as value in ToolbarItems to get specified item.
            Find,
            //Specifies the Analytics as value in ToolbarItems to get specified item.
            Analytics,
            //Specifies the Settings as value in ToolbarItems to get specified item.
            Settings,
            //Specifies the LimitRecordSetup as value in ToolbarItems to get specified item.
            LimitRecordSetup,
            //Specifies the AlertIcon as value in ToolbarItems to get specified item.
            AlertIcon,
            //Shows all toolbar items.
            All,
        }

        enum Toolbars {
            //Specifies the Horizontal as value in Toolbars to display horizontal toolbar.
            Horizontal,
            //Specifies the Vertical as value in Toolbars to display vertical toolbar.
            Vertical,
            //Shows both vertical and horizontal toolbars.
            All,
        }

        enum PrintOptions {
            //Specifies the Default property in printOptions.
            Default,
            //Specifies the NewTab property in printOptions.
            NewTab,
            //Specifies the None property in printOptions.
            None,
        }

        enum ProcessingMode {
            //Specifies the Remote property in processingMode.
            Remote,
            //Specifies the Local property in processingMode.
            Local,
        }

        enum RenderMode {
            //Specifies the Default property in RenderMode to get default output.
            Default,
            //Specifies the Mobile property in RenderMode to get specified output.
            Mobile,
            //Specifies the Desktop property in RenderMode to get specified output.
            Desktop,
        }

        enum ToolbarRenderMode {
            //Specifies the Native property in toolbarRenderMode.
            Native,
            //Specifies the Classic property in toolbarRenderMode.
            Classic,
        }
    }
}
interface JQueryXHR {
    /**
     * Returns the cancel option value.
     */
    cancel?: boolean;
}
interface JQueryPromise<T> {
    /**
     * Returns the cancel option value.
     */
    cancel?: boolean;
}
interface JQueryDeferred<T> {
    /**
     * Returns the cancel option value.
     */
    cancel?: boolean;
}
interface JQueryParam {
    /**
     * Returns the cancel option value.
     */
    cancel?: boolean;
}
interface JQuery {
    data(key: any): any;
}
interface Window {
    ej: typeof ej;
}
interface JQuery {

    boldReportDesigner(options?: ej.ReportDesigner.Model): JQuery;
    boldReportDesigner(memberName: any, value?: any, param?: any): any;

    boldReportViewer(options?: ej.ReportViewer.Model): JQuery;
    boldReportViewer(memberName: any, value?: any, param?: any): any;

    data(key: 'boldReportDesigner'): ej.ReportDesigner;
    data(key: 'boldReportViewer'): ej.ReportViewer;
}
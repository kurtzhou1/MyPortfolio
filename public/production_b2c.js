/* eslint-disable complexity */
import '@babel/polyfill';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import Loadable from 'react-loadable';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ShadowView from './src/B2C/common/ShadowView';

import { LionIntl } from '@B2C/shared/International/index';

const IntlLan = new LionIntl({ get: 'lang' });


// loading 時的 component
const MyLoadingComponent = props => {
    if (props.error) {
        return <div>Error!</div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
};

// 暴露在全域的方法
const SearchPanel = function (opts = {}) {
    const {
        width,
        panel,
        type,
        target,
        mTitle,
        mCloseBtn,
        renderNode,
        searchPaneltDidMount,
        flight
    } = opts;

    this.panel = panel;
    this.type = type;
    this.target = target;
    this.mTitle = mTitle;
    this.mCloseBtn = mCloseBtn;
    this.flight = flight;
    this.renderNode = document.getElementById(renderNode);
    this.opts = { ...opts, mTitle: opts.mTitle || '搜尋引擎' };

    // b2c 搜尋面板
    this.b2cSearchPanel = [
        'all',
        'travel',
        'flight',
        'hotel',
        'foreignVacation',
        'taiwanVacation',
        'themeTravel',
        'cruise',
        'highSpeedRail',
        'activityForeign',
        'activityTaiwan'
    ];

    // b2b 搜尋面板
    this.b2bSearchPanel = [
        'b2b_all', // 全部館別顯示
        'b2b_travel', // 團體
        'b2b_hotel', // 訂房
        'b2b_flight', // 機票
        'b2b_vacation', // 自由行
        'b2b_activityTW', // 當地游(台灣)
        'b2b_activityAboard', // 當地游(國外)
        'b2b_theme', // 主題旅遊
        'b2b_cruise' // 郵輪
    ];

    // 欣聯航
    this.XinFlight = ['Xinflight'];

    // 搜尋結果頁
    this.other = [
        'flightSearch',
        'tw_vacationSearch',
        'vacationSearch',
        'hotelSearch',
        'activitySearch'
    ];

    // 手機板可能的模式
    this.mobileMode = ['m_seo', 'm_global', 'm_result', 'm'];

    const panelSkin = (() => {
        if (this.other.includes(this.panel)) {
            // 如不是搜尋面板 panel 就不載入 searchPanel css
            return '';
        } else {
            return {
                'search_panel-singlePaneel': !this.panel.includes('all') && !this.panel.includes('Xinflight') && this.type === 'pc',
                'search_panel-singlePanl_m': !this.panel.includes('all') && !this.panel.includes('Xinflight') && this.type === 'm',
                'search_panel_b2b_pc': this.type === 'pc',
                'search_panel_b2b-orign': typeof width === 'undefined' && this.type === 'pc',
                [width]: this.type !== 'm' && width
            };
        }
    })();
    this.panelClass = classNames({
        ...panelSkin,
        commonBaseStyle: true,
        search_panel_b2b: true,
    });
    this.searchPaneltDidMount = searchPaneltDidMount;
    this.init();
};

SearchPanel.prototype.importBabelPolyfill = function () {
    if (
        !global._babelPolyfill &&
        (typeof window === 'undefined' || !window._babelPolyfill)
    ) {
        import('@babel/polyfill');
    }
};

// initial
SearchPanel.prototype.init = function () {
  import(
      /* webpackChunkName: "LionSearchPanel-core" */ './magaele/core/core.scss'
  );
  import(
      /* webpackChunkName: "LionSearchPanel-base" */ './src/common/base.scss'
  );
  if (
      (this.b2cSearchPanel.includes(this.panel) && this.panel !== 'all') ||
    (this.b2bSearchPanel.includes(this.panel) && this.panel !== 'all')
  ) {
    import(
        /* webpackChunkName: "LionSearchPanel-all-css" */ './src/B2C/all/style/css.scss'
    );
  }

  this.render();
};

// import panel
SearchPanel.prototype.returnPanel = function () {
    switch (this.panel) {
        case 'travel':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-travel-m" */ './src/B2C/travel/main/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-travel-pc" */ './src/B2C/travel/main/pc'
                );
        case 'flight':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-flight-m" */ './src/B2C/flight/main/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-flight-pc" */ './src/B2C/flight/main/pc'
                );
        case 'flightSearch':
            switch (this.type) {
                case 'm':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-flightSearch-m" */ './src/B2C/flight/result/mobile'
                    );
                case 'pc':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-flightSearch-pc" */ './src/B2C/flight/result/pc'
                    );
                case 'm_seo':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-flightSearch-m_seo" */ './src/B2C/flight/seo/mobile'
                    );
                case 'pc_seo':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-flightSearch-pc_seo" */ './src/B2C/flight/seo/pc'
                    );
                case 'm_global':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-flightSearch-m" */ './src/B2C/flight/global/mobile'
                    );
                case 'pc_global':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-flightSearch-m" */ './src/B2C/flight/global/pc'
                    );
                default:
                    return;
            }
        case 'hotelSearch':
            switch (this.type) {
                case 'm_seo':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-hotelSearch-m_seo" */ './src/B2C/hotel/seo/mobile'
                    );
                case 'pc_seo':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-hotelSearch-pc_seo" */ './src/B2C/hotel/seo/pc'
                    );
                case 'm_result':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-hotelSearch-m_result" */ './src/B2C/hotel/result/mobile'
                    );
                case 'pc_result':
                    return import(
                        /* webpackChunkName: "LionSearchPanel-hotelSearch-pc_result" */ './src/B2C/hotel/result/pc'
                    );
                default:
                    return;
            }
        case 'hotel':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-hotel-m" */ './src/B2C/hotel/main/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-hotel-pc" */ './src/B2C/hotel/main/pc'
                );
        case 'foreignVacation':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-foreignVacation-m" */ './src/B2C/vacation/Entry/mobile/foreignVacation_m'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-foreignVacation-pc" */ './src/B2C/vacation/Entry/pc/foreignVacation_pc'
                );
        case 'taiwanVacation':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-taiwanVacation-m" */ './src/B2C/vacation/Entry/mobile/taiwanVacation_m'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-taiwanVacation-pc" */ './src/B2C/vacation/Entry/pc/taiwanVacation_pc'
                );
        case 'vacationSearch':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-vacationSearch-m" */ './src/B2C/vacation/Entry/mobile/vacationSearch_m'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-vacationSearch-pc" */ './src/B2C/vacation/Entry/pc/vacationSearch_pc'
                );
        case 'tw_vacationSearch':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-tw_vacationSearch-m" */ './src/B2C/vacation/Entry/mobile/tw_vacationSearch_m'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-tw_vacationSearch-pc" */ './src/B2C/vacation/Entry/pc/tw_vacationSearch_pc'
                );
        case 'themeTravel':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-themeTravel-m" */ './src/B2C/travel/theme/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-themeTravel-pc" */ './src/B2C/travel/theme/pc'
                );
        case 'cruise':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-cruise-m" */ './src/B2C/travel/cruise/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-cruise-pc" */ './src/B2C/travel/cruise/pc'
                );
        case 'highSpeedRail':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-highSpeedRail-m" */ './src/B2C/vacation/Entry/mobile/highSpeedRail_m'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-highSpeedRail-pc" */ './src/B2C/vacation/Entry/pc/highSpeedRail_pc'
                );
        case 'activityForeign':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-activityForeign-m" */ './src/B2C/activity/foreign/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-activityForeign-pc" */ './src/B2C/activity/foreign/pc'
                );
        case 'activityTaiwan':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-activityTaiwan-m" */ './src/B2C/activity/taiwan/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-activityTaiwan-pc" */ './src/B2C/activity/taiwan/pc'
                );
        case 'activitySearch':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-activityTaiwan-m" */ './src/B2C/activity/searchResultPage/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-activityTaiwan-pc" */ './src/B2C/activity/searchResultPage/pc'
                );
        case 'all':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-all-m" */ './src/B2C/all/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-all-pc" */ './src/B2C/all/pc'
                );
        case 'b2b_travel':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-travel-m" */ './src/B2B/travel/Entry/mobile/travel_m'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-travel-pc" */ './src/B2B/travel/Entry/pc/travel_pc'
                );
        case 'b2b_hotel':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-hotel-m" */ './src/B2B/hotel/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-hotel-pc" */ './src/B2B/hotel/pc'
                );
        case 'b2b_flight':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-flight-m" */ './src/B2B/flight/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-flight-pc" */ './src/B2B/flight/pc'
                );
        case 'b2b_vacation':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-vacation-m" */ './src/B2B/vacation/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-vacation-pc" */ './src/B2B/vacation/pc'
                );
        case 'b2b_activityTW':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-activityTW-m" */ './src/B2B/activity/home_M'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-activityTW-pc" */ './src/B2B/activity/home'
                );
        case 'b2b_activityAboard':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-activityAboard-m" */ './src/B2B/activity/abroad_M'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-activityAboard-pc" */ './src/B2B/activity/abroad'
                );
        case 'b2b_theme':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-theme-m" */ './src/B2B/travel/Entry/mobile/theme_m'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-theme-pc" */ './src/B2B/travel/Entry/pc/theme_pc'
                );
        case 'b2b_cruise':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-travel-m" */ './src/B2B/travel/Entry/mobile/cruise_m'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-travel-pc" */ './src/B2B/travel/Entry/pc/cruise_pc'
                );
        case 'b2b_all':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-b2b-all-m" */ './src/B2B/all/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-b2b-all-pc" */ './src/B2B/all/pc'
                );

        case 'Xinflight':
            return this.type === 'm'
                ? import(
                    /* webpackChunkName: "LionSearchPanel-xinflight-m" */ './src/Xinflight/All/mobile'
                )
                : import(
                    /* webpackChunkName: "LionSearchPanel-xinflight-pc" */ './src/Xinflight/All/pc'
                );
        default:
            return;
    }
};

// 舊面板
SearchPanel.prototype.returnPanel_old = function () {
    switch (this.panel) {
        case 'flightSearch':
            switch (this.type) {
                case 'm':
                    return import(/* webpackChunkName: "flightSearch-m-old" */ './src/flightSearch/mobile');
                case 'pc':
                    return import(/* webpackChunkName: "flightSearch-pc-old" */ './src/flightSearch/pc');
                case 'm_seo':
                    return import(/* webpackChunkName: "flightSearch-m-seo-old" */ './src/flightSearch/mobile_seo');
                case 'pc_seo':
                    return import(/* webpackChunkName: "flightSearch-pc-seo-old" */ './src/flightSearch/pc_seo');
                default:
                    return '';
            }
        case 'vacationSearch':
            return (this.type === 'm') ?
                import(/* webpackChunkName: "foreignVacation-m-old" */ './src/vacationSearch/mobile') : import(/* webpackChunkName: "foreignVacation-pc-old" */ './src/vacationSearch/pc');
        case 'tw_vacationSearch':
            return (this.type === 'm') ?
                import(/* webpackChunkName: "tw_vacationSearch-m-old" */ './src/vacationSearchTW/mobile') : import(/* webpackChunkName: "tw_vacationSearch-pc-old" */ './src/vacationSearchTW/pc');

        default:
            return;
    }

};

//　render 面板
SearchPanel.prototype.render = function () {

    const props = {
        host: this.renderNode,
        type: this.type,
        panelClass: this.panelClass,
        opts: this.opts,
        panel: !this.other.includes(this.opts.panel)
    };

    const isShadowDomPanel = [...this.b2cSearchPanel, ...this.b2bSearchPanel, ...this.XinFlight, 'hotelSearch', 'tw_vacationSearch', 'vacationSearch'];

    // 動態載入的容器
    const Templete = Loadable({
        loader: () => (isShadowDomPanel.includes(this.panel) ? this.returnPanel() : this.returnPanel_old()),
        // loader: () => this.returnPanel(),
        loading: MyLoadingComponent
    });

    const MobileHead = Loadable({
        loader: () => {
            if (this.b2cSearchPanel.includes(this.panel)) {
                return import(
                    /* webpackChunkName: "LionSearchPanel-b2c-mobilehead" */ './src/B2C/all/MobileHead'
                );
            } else {
                return import(
                    /* webpackChunkName: "LionSearchPanel-b2b-mobilehead" */ './src/B2B/all/MobileHead'
                );
            }
        },
        loading: MyLoadingComponent
    });

    const ShadowDomPanel = ({ host, type, panelClass, opts, panel }) => {
        return (
            <ShadowView host={host} type={type}>
                {type === 'm' && panel ? <MobileHead {...opts} /> : null}
                <div className={`${panelClass}`}>
                    <Templete {...opts} />
                </div>
            </ShadowView>
        );
    };

    const NoShadowDomPanel = ({ type, panelClass, opts, panel }) => {
        return (
            <>
                {type === 'm' && panel ? <MobileHead {...opts} /> : null}
                <div className={`${panelClass}`}>
                    <Templete {...opts} />
                </div>
            </>
        );
    };

    const Panel = () => (isShadowDomPanel.includes(this.panel) ? <ShadowDomPanel {...props} /> : <NoShadowDomPanel {...props} />);
    // const Panel = () => <NoShadowDomPanel {...props} />;

    ReactDOM.render(
        <Panel />,
        this.renderNode,
        this.searchPaneltDidMount
    );
};

window.SearchPanel = SearchPanel;

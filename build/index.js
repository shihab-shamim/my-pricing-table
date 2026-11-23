/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Backend/ClipBoard.js":
/*!*********************************************!*\
  !*** ./src/Components/Backend/ClipBoard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ClipBoard = ({
  shortcode
}) => {
  const [hasCopied, setHasCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shortcode);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shortcode;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      // Ignore clipboard errors
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    style: {
      marginBottom: '24px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      textAlign: 'center',
      marginBottom: '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: '15px',
      fontWeight: 500,
      marginBottom: '10px'
    }
  }, "Copy this shortcode and paste it into your post, page, or text widget content:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleCopy,
    type: "button",
    style: {
      border: 'none',
      background: '#2271b1',
      color: '#fff',
      width: '100%',
      maxWidth: '360px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      fontSize: '15px',
      fontWeight: 600,
      padding: '10px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: '0.2s'
    }
  }, hasCopied ? 'Copied Successfully!' : shortcode)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClipBoard);

/***/ }),

/***/ "./src/Components/Backend/Edit.js":
/*!****************************************!*\
  !*** ./src/Components/Backend/Edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Settings/Settings */ "./src/Components/Backend/Settings/Settings.js");
/* harmony import */ var _Common_Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _ClipBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClipBoard */ "./src/Components/Backend/ClipBoard.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.js");










const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId,
    CPTType,
    currentPostId
  } = props;
  const {
    tableId
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bppt-pricing-table-editor-wrapper'
  });

  // Fetch existing tables from WordPress data store
  const {
    posts,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const core = select('core');
    return {
      posts: core ? core.getEntityRecords('postType', 'bppt-pricing-table', {
        per_page: -1,
        status: 'publish'
      }) : null,
      isLoading: core ? core.isResolving('getEntityRecords', ['postType', 'bppt-pricing-table', {
        per_page: -1,
        status: 'publish'
      }]) : false
    };
  }, []);

  // Fallback to inline-localized window.bpptTables if available
  const tables = posts && posts.length > 0 ? posts.map(p => ({
    id: p.id,
    title: p.title?.rendered || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Table #%d', 'bpricing'), p.id)
  })) : window.bpptTables || [];
  const isEditingCPT = CPTType === 'bppt-pricing-table';
  const shortcode = currentPostId ? `[bp-table id=${currentPostId}]` : '';
  const tableOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('— Select a Pricing Table —', 'bpricing'),
    value: ''
  }, ...tables.map(t => ({
    label: t.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Table #%d', 'bpricing'), t.id),
    value: String(t.id)
  }))];
  const selectedTable = tables.find(t => String(t.id) === String(tableId));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_Style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_Settings__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    tables: tables
  }), isEditingCPT && shortcode && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ClipBoard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    shortcode: shortcode
  }), tableId ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bppt-table-preview-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bppt-table-preview-badge",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 14px',
      marginBottom: '14px',
      background: '#f0f6fc',
      border: '1px solid #c8d7e1',
      borderRadius: '4px',
      fontSize: '13px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Pricing Table:', 'bpricing')), ' ', selectedTable ? selectedTable.title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Table #%s', 'bpricing'), tableId)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "secondary",
    isSmall: true,
    onClick: () => setAttributes({
      tableId: ''
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Change Table', 'bpricing'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
    block: "bppt/pricing-table",
    attributes: attributes
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    icon: _utils_icons__WEBPACK_IMPORTED_MODULE_9__.pricingTableIcon,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('My Pricing Table', 'bpricing'),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Select an existing pricing table to display, or create a new one.', 'bpricing'),
    className: "bppt-placeholder"
  }, isLoading && !tables.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null) : tables.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      width: '100%',
      maxWidth: '400px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: tableId || '',
    options: tableOptions,
    onChange: val => setAttributes({
      tableId: val
    }),
    style: {
      flex: 1
    }
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      textAlign: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      margin: '0 0 12px 0',
      color: '#646970'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No pricing tables found.', 'bpricing')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    href: "post-new.php?post_type=bppt-pricing-table",
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Create Your First Pricing Table', 'bpricing')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const editor = select('core/editor');
  return {
    CPTType: editor?.getCurrentPostType?.(),
    currentPostId: editor?.getCurrentPostId?.()
  };
})(Edit));

/***/ }),

/***/ "./src/Components/Backend/Settings/Settings.js":
/*!*****************************************************!*\
  !*** ./src/Components/Backend/Settings/Settings.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





const THEME_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme 1 — Circular Price Badge', 'bpricing'),
  value: 'demo-1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme 2 — Ribbon & Banner Style', 'bpricing'),
  value: 'demo-2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme 3 — Gradient Bar Style', 'bpricing'),
  value: 'demo-3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme 4 — Modern Card Shape', 'bpricing'),
  value: 'demo-4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme 5 — Arrow Banner Gradient', 'bpricing'),
  value: 'demo-5'
}];
const COLOR_SCHEMES = {
  'demo-1': [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default (Teal/Cyan)', 'bpricing'),
    value: 'default'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Basic (Mint Green)', 'bpricing'),
    value: 'basic'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Standard (Ocean Blue)', 'bpricing'),
    value: 'standard'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ultimate (Coral Pink)', 'bpricing'),
    value: 'ultimite'
  }],
  'demo-2': [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default (Crimson Red)', 'bpricing'),
    value: 'default'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pink', 'bpricing'),
    value: 'pink'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Purple', 'bpricing'),
    value: 'purple'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sky', 'bpricing'),
    value: 'sky'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lemon', 'bpricing'),
    value: 'lemon'
  }],
  'demo-3': [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default (Emerald Green)', 'bpricing'),
    value: 'default'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Purple', 'bpricing'),
    value: 'purple'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pink', 'bpricing'),
    value: 'pink'
  }],
  'demo-4': [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default (Fresh Lime)', 'bpricing'),
    value: 'default'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Orange', 'bpricing'),
    value: 'orange'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Purple', 'bpricing'),
    value: 'purple'
  }],
  'demo-5': [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default (Warm Orange)', 'bpricing'),
    value: 'default'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Green', 'bpricing'),
    value: 'green'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blue', 'bpricing'),
    value: 'blue'
  }]
};
const Settings = ({
  attributes,
  setAttributes
}) => {
  const {
    theme = 'demo-1',
    tables = []
  } = attributes;
  const [activePlan, setActivePlan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const tabs = [{
    name: 'general',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'bpricing'),
    className: 'bppt-tab-general'
  }, {
    name: 'style',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'bpricing'),
    className: 'bppt-tab-style'
  }];

  // Update one property of the active plan
  const updateCurrentPlan = (key, value) => {
    const nextTables = tables.map((tbl, idx) => {
      if (idx === activePlan) {
        return {
          ...tbl,
          [key]: value
        };
      }
      return tbl;
    });
    setAttributes({
      tables: nextTables
    });
  };

  // Add a new plan column
  const addPlan = () => {
    const newPlan = {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plan %d', 'bpricing'), tables.length + 1),
      price: '29',
      currency: '$',
      unit: 'month',
      badge: '',
      isFeatured: false,
      colorScheme: 'default',
      btnText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose Plan', 'bpricing'),
      btnLink: '#',
      features: [{
        text: 'Feature 1',
        enabled: true
      }, {
        text: 'Feature 2',
        enabled: true
      }, {
        text: 'Feature 3',
        enabled: true
      }]
    };
    setAttributes({
      tables: [...tables, newPlan]
    });
    setActivePlan(tables.length);
  };

  // Remove current plan
  const removePlan = idx => {
    if (tables.length <= 1) return;
    const nextTables = tables.filter((_, i) => i !== idx);
    setAttributes({
      tables: nextTables
    });
    setActivePlan(Math.max(0, idx - 1));
  };

  // Feature operations
  const updateFeature = (fIndex, key, value) => {
    const current = tables[activePlan] || {};
    const features = [...(current.features || [])];
    features[fIndex] = {
      ...features[fIndex],
      [key]: value
    };
    updateCurrentPlan('features', features);
  };
  const addFeature = () => {
    const current = tables[activePlan] || {};
    const features = [...(current.features || []), {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('New Feature', 'bpricing'),
      enabled: true
    }];
    updateCurrentPlan('features', features);
  };
  const removeFeature = fIndex => {
    const current = tables[activePlan] || {};
    const features = (current.features || []).filter((_, i) => i !== fIndex);
    updateCurrentPlan('features', features);
  };
  const currentPlan = tables[activePlan] || tables[0] || {};
  const currentSchemes = COLOR_SCHEMES[theme] || COLOR_SCHEMES['demo-1'];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bppt-inspector-controls",
    style: {
      padding: '4px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "bppt-settings-tab-panel",
    tabs: tabs
  }, tab => {
    if (tab.name === 'general') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Theme', 'bpricing'),
        initialOpen: true
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme Design', 'bpricing'),
        value: theme,
        options: THEME_OPTIONS,
        onChange: val => setAttributes({
          theme: val
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose one of the 5 built-in pricing table designs.', 'bpricing')
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Columns / Plans', 'bpricing'),
        initialOpen: true
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap',
          marginBottom: '14px'
        }
      }, tables.map((t, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: i,
        isSmall: true,
        variant: activePlan === i ? 'primary' : 'secondary',
        onClick: () => setActivePlan(i)
      }, t.name || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column %d', 'bpricing'), i + 1))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isSmall: true,
        variant: "tertiary",
        onClick: addPlan
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('+ Add Column', 'bpricing'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          padding: '12px',
          background: '#f6f7f7',
          borderRadius: '4px',
          marginBottom: '14px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Editing: %s', 'bpricing'), currentPlan.name || '')), tables.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isDestructive: true,
        isSmall: true,
        variant: "link",
        onClick: () => removePlan(activePlan)
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete Column', 'bpricing'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plan Name', 'bpricing'),
        value: currentPlan.name || '',
        onChange: val => updateCurrentPlan('name', val)
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          display: 'flex',
          gap: '8px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          flex: 1
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Currency', 'bpricing'),
        value: currentPlan.currency || '$',
        onChange: val => updateCurrentPlan('currency', val)
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          flex: 2
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price', 'bpricing'),
        value: currentPlan.price || '',
        onChange: val => updateCurrentPlan('price', val)
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Billing Period / Unit', 'bpricing'),
        value: currentPlan.unit || '',
        onChange: val => updateCurrentPlan('unit', val),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('e.g. month, year', 'bpricing')
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Scheme', 'bpricing'),
        value: currentPlan.colorScheme || 'default',
        options: currentSchemes,
        onChange: val => updateCurrentPlan('colorScheme', val)
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Featured / Hot Plan', 'bpricing'),
        checked: Boolean(currentPlan.isFeatured),
        onChange: val => updateCurrentPlan('isFeatured', val)
      }), currentPlan.isFeatured && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Badge Text', 'bpricing'),
        value: currentPlan.badge || '',
        onChange: val => updateCurrentPlan('badge', val),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('e.g. "Hot", "Popular", "Best Value"', 'bpricing')
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text', 'bpricing'),
        value: currentPlan.btnText || '',
        onChange: val => updateCurrentPlan('btnText', val)
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button URL', 'bpricing'),
        value: currentPlan.btnLink || '',
        onChange: val => updateCurrentPlan('btnLink', val)
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          marginTop: '16px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
        style: {
          margin: 0,
          fontSize: '13px'
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plan Features', 'bpricing')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isSmall: true,
        variant: "secondary",
        onClick: addFeature
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('+ Add Feature', 'bpricing'))), (currentPlan.features || []).map((feat, fIdx) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: fIdx,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 8px',
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          marginBottom: '6px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
        checked: Boolean(feat.enabled !== false),
        onChange: val => updateFeature(fIdx, 'enabled', val),
        help: ""
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          flex: 1
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        value: feat.text || '',
        onChange: val => updateFeature(fIdx, 'text', val)
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isDestructive: true,
        isSmall: true,
        variant: "link",
        onClick: () => removeFeature(fIdx)
      }, "\xD7"))))));
    }
    if (tab.name === 'style') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme & Layout Style', 'bpricing'),
        initialOpen: true
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          fontSize: '13px',
          color: '#646970',
          lineHeight: '1.5'
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Each theme has its own responsive styling (CSS). You can adjust individual plan colors using the "Color Scheme" setting under the General tab.', 'bpricing')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          marginTop: '14px',
          padding: '10px',
          background: '#f0f6fc',
          borderRadius: '4px',
          fontSize: '12px'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Active Theme:', 'bpricing')), ' ', THEME_OPTIONS.find(o => o.value === theme)?.label));
    }
    return null;
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Style = () => {
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"bppt/pricing-table","title":"Pricing Table","category":"widgets","description":"Make beautiful pricing tables with this block.","keywords":["pricing","pricing table","price table","table","bppt"],"textdomain":"bpricing","attributes":{"theme":{"type":"string","default":"demo-1"},"columns":{"type":"number","default":3},"tables":{"type":"array","default":[{"name":"Basic","price":"19","currency":"$","unit":"month","badge":"","isFeatured":false,"colorScheme":"default","btnText":"Get Started","btnLink":"#","features":[{"text":"5 Projects","enabled":true},{"text":"10 GB Storage","enabled":true},{"text":"Basic Support","enabled":true},{"text":"Custom Domain","enabled":false},{"text":"24/7 Dedicated Support","enabled":false}]},{"name":"Standard","price":"49","currency":"$","unit":"month","badge":"Hot","isFeatured":true,"colorScheme":"standard","btnText":"Choose Plan","btnLink":"#","features":[{"text":"20 Projects","enabled":true},{"text":"50 GB Storage","enabled":true},{"text":"Priority Support","enabled":true},{"text":"Custom Domain","enabled":true},{"text":"24/7 Dedicated Support","enabled":false}]},{"name":"Premium","price":"99","currency":"$","unit":"month","badge":"Popular","isFeatured":false,"colorScheme":"ultimite","btnText":"Upgrade Now","btnLink":"#","features":[{"text":"Unlimited Projects","enabled":true},{"text":"500 GB Storage","enabled":true},{"text":"VIP Support","enabled":true},{"text":"Custom Domain","enabled":true},{"text":"24/7 Dedicated Support","enabled":true}]}]},"tableId":{"type":"string","default":""},"align":{"type":"string","default":"wide"}},"supports":{"html":false,"align":["wide","full"]},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./view.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utils/icons.js":
/*!****************************!*\
  !*** ./src/utils/icons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pricingTableIcon: () => (/* binding */ pricingTableIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const pricingTableIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3 9h18"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9 21V9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 21V9"
}));

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Backend/Edit */ "./src/Components/Backend/Edit.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/icons */ "./src/utils/icons.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_4__.pricingTableIcon,
  edit: _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => null
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
import "../assets/scss/bootstrap-build.scss"
// import "../assets/scss/bootstrap.scss"
// (_: string, { props }: any) => {
//     if (props.horizontal) return 'form-label col-sm-10';
//     return `form-label`
// },
export const bootstrapConfig: any = {
    field: {
        override: true,
        rootClass: 'input-field',
        labelClass: 'form-label',
        // messageClass: 'help',
        // variantClass: 'form-control-',
        addonsClass: 'input-group',
        groupedClass: 'input-group',
        // groupMultilineClass: 'is-grouped-multiline',
        // horizontalClass: 'row',
        // labelHorizontalClass: 'field-label',
        // bodyHorizontalClass: 'field-body',
        // bodyClass: 'input-group'
    },
    input: {
        override: true,
        rootClass: 'input',
        inputClass: 'form-control',
        textareaClass: 'form-control',
        // roundedClass: 'is-rounded',
        sizeClass: (_: string, { props }: any) => {
            if (props.size == 'small'){
                return 'form-control-sm';
            }else if(props.size == 'medium') {
                return 'form-control-md'
            }else if (props.size == 'large') {
                return 'form-control-lg'
            }
        },
        variantClass: (_: string, { props }: any) => {
            if (props.outlined) return '';
            return `form-control-${props.variant}`
        },
        expandedClass: 'is-expanded',
        // iconLeftSpaceClass: 'input-group-text',
        iconLeftClass: 'is-left',
        iconRightClass: 'is-right',
        // iconRightSpaceClass: 'input-group-text',
        counterClass: 'help counter'
    },
    select: {
        override: true,
        rootClass: (_: string, { props, computed }: any) => {
            // const classes = ['form-select']
            // if (props.size) classes.push(`is-${props.size}`)
            // if (props.rounded) classes.push('is-rounded')
            // if (computed.statusVariant) classes.push(`is-${computed.statusVariant}`)
            // if (props.multiple) classes.push('is-multiple')
            // if (props.icon) classes.push('has-icons-left')
            // if (props.iconRight) classes.push('has-icons-right')
            // return classes.join(' ').trim()
            return 'select'
        },
        selectClass: 'form-select',
        // roundedClass: 'is-rounded',
        // variantClass: 'is-',
        // sizeClass: 'is-',
        expandedClass: 'is-fullwidth',
        // iconLeftSpaceClass: 'has-icons has-icons-left',
        iconLeftClass: 'is-left',
        iconRightClass: 'is-right',
        // iconRightSpaceClass: 'has-icons has-icons-right',
        // arrowClass: '',
        // multipleClass: 'is-multiple',
        placeholderClass: 'is-empty'
    },
    icon: {
        override: true,
        rootClass: 'icon',
        variantClass: 'text-',
        sizeClass: 'is-',
        clickableClass: 'is-clickable',
        spinClass: 'is-spin',
    },
    checkbox: {
        override: true,
        rootClass: 'form-check',
        disabledClass: 'is-disabled',
        checkClass: 'form-check-input',
        labelClass: 'form-check-label',
        variantClass: 'is-',
        sizeClass: 'is-'
    },
    radio: {
        override: true,
        rootClass: 'form-check',
        disabledClass: 'is-disabled',
        checkClass: 'form-check-input',
        labelClass: 'form-check-label',
        variantClass: 'is-',
        sizeClass: 'is-'
    },
    switch: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['switch'];
            if (props.rounded) classes.push('is-rounded')
            if (props.leftLabel) classes.push('has-left-label')
            return classes.join(' ')
        },
        // roundedClass: 'is-rounded',
        checkClass: (_: string, { props }: any) => {
            const classes = ['check'];
            if (props.variant) classes.push(`is-${props.variant}`)
            if (props.passiveVariant) classes.push(`is-${props.passiveVariant}-passive`)
            return classes.join(' ')
        },
        elementsWrapperClass: 'check-wrapper',
        labelClass: 'control-label',
        // leftLabelClass: 'has-left-label',
        sizeClass: 'is-',
        // variantClass: 'is-',
        // passiveVariantClass: (passiveVariant: string) => (`is-${passiveVariant}-passive`)
    },
    autocomplete: {
        override: true,
        rootClass: 'form-control',
        menuClass: 'dropdown-menu show expanded', // @TODO add class for expanded
        // menuPositionClass: 'is-opened-',
        itemClass: 'dropdown-item',
        itemHoverClass: 'is-hovered',
        itemEmptyClasses: 'is-disabled',
        itemGroupTitleClass: 'has-text-weight-bold'
    },
    inputitems: {
        override: true,
        rootClass: 'taginput control',
        containerClass: 'taginput-container is-focusable',
        itemClass: 'tag',
        closeClass: 'delete is-small'
    },
    pagination: {
        override: true,
        rootClass: 'pagination-wrapper',
        sizeClass: (_: string, { props }: any) => {
            if (props.size == 'small'){
                return 'pagination-sm';
            }else if(props.size == 'medium') {
                return 'pagination-md'
            }else if (props.size == 'large') {
                return 'pagination-lg'
            }
        },
        simpleClass: 'is-simple',
        orderClass: (_: string, { props }: any) => {
            if (props.order == ""){
                return 'justify-content-start';
            }else if (props.order == "centered") {
                return 'justify-content-center'
            }else if (props.order == "right"){
                return 'justify-content-end'
            }
        },
        listClass: 'pagination',
        linkClass: 'page-link',
        linkCurrentClass: 'active',
        linkDisabledClass: 'disabled',
        nextBtnClass: 'pagination-next',
        prevBtnClass: 'pagination-prev',
        // infoClass: 'info'
    },
    slider: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['b-slider'];
            if (props.variant) classes.push(`is-${props.variant}`)
            if (props.rounded) classes.push('is-rounded')
            return classes.join(' ')
        },
        disabledClass: 'is-disabled',
        // variantClass: 'is-',
        trackClass: 'b-slider-track',
        fillClass: 'b-slider-fill',
        thumbWrapperClass: (_: string, { data }: any) => {
            const classes = ['b-slider-thumb-wrapper'];
            if (data.dragging) classes.push(`is-dragging`)
            return classes.join(' ')
        },
        sizeClass: 'is-',
        thumbClass: 'b-slider-thumb',
        tickLabelClass: 'b-slider-tick-label',
        tickHiddenClass: 'is-tick-hidden',
        tickClass: 'b-slider-tick',
        // thumbRoundedClass: 'is-rounded'
        // thumbDraggingClass: 'is-dragging'
    },
    tabs: {
        override: true, 
        itemTag: 'a',
        rootClass: 'nav-tab-wrapper',
        contentClass: 'nav-content',
        // multilineClass: 'is-multiline',
        navTabsClass: 'nav nav-tabs',
        expandedClass: 'is-fullwidth', // @TODO add class
        verticalClass: 'is-vertical', // @TODO add class
        positionClass: 'is-', // @TODO add class
        navSizeClass: 'is-', // @TODO add class
        navPositionClass: 'is-', // @TODO add class
        transitioningClass: 'is-transitioning', // @TODO add class
        itemClass: 'content-text',
        itemHeaderActiveClass: () => 'active',
        itemHeaderDisabledClass: () => 'disabled'
    },
    table: {
        override: true,
        wrapperClass: 'b-table table-wrapper',
        tableClass: 'table',
        borderedClass: 'is-bordered',
        stripedClass: 'is-striped',
        narrowedClass: 'is-narrow',
        hoverableClass: 'is-hoverable',
        emptyClass: 'is-empty',
        detailedClass: 'detail',
        footerClass: 'table-footer',
        paginationWrapperClass: '',
        scrollableClass: 'is-scrollable',
        trSelectedClass: 'is-selected',
        thSortableClass: 'is-sortable',
        thCurrentSortClass: 'is-current-sort',
        thSortIconClass: 'th-wrap sort-icon',
        thUnselectableClass: 'is-unselectable',
        thStickyClass: 'is-sticky',
        thCheckboxClass: 'th-checkbox',
        thDetailedClass: 'th-chevron-cell',
        tdDetailedChevronClass: 'chevron-cell',
        thPositionClass: (position: string) => {
            if (position === 'centered') return 'is-centered'
            else if (position === 'right') return 'is-right'
            return
        },
        tdPositionClass: (position: string) => {
            if (position === 'centered') return 'has-text-centered'
            else if (position === 'right') return 'has-text-right'
            return
        },
        mobileClass: 'has-mobile-cards',
        mobileSortClass: 'table-mobile-sort field'
    },
    tooltip: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['b-tooltip'];
            if (props.variant) classes.push(`is-${props.variant}`); else classes.push(`is-primary`)
            if (props.position) classes.push(`is-${props.position}`)
            return classes.join(' ')
        },
        contentClass: 'tooltip-content',
        triggerClass: 'tooltip-trigger',
        alwaysClass: 'is-always',
        multilineClass: 'is-multiline',
        variantClass: 'is-',
        orderClass: 'is-'
    },
    steps: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['b-steps'];
            if (props.variant) classes.push(`is-${props.variant}`);
            if (props.disables) classes.push('is-disabled')
            return classes.join(' ')
        },
        stepsClass: (_: string, { props }: any) => {
            const classes = ['steps'];
            if (props.animated) classes.push('is-animated')
            if (props.rounded) classes.push('is-rounded')
            if (props.labelPosition === 'left') classes.push('has-label-left')
            if (props.labelPosition === 'right') classes.push('has-label-right')
            return classes.join(' ')
        },
        itemClass: 'step-link',
        itemHeaderClass: 'step-item',
        itemHeaderVariantClass: 'is-',
        itemHeaderActiveClass: 'is-active',
        itemHeaderPreviousClass: 'is-previous',
        stepLinkClass: 'step-link',
        stepLinkLabelClass: 'step-title',
        stepLinkClickableClass: 'is-clickable',
        // stepLinkLabelPositionClass: 'is-',
        stepMarkerClass: 'step-marker',
        stepNavigationClass: 'step-navigation',
        stepContentClass: 'step-content',
        verticalClass: 'is-vertical',
        positionClass: 'is-',
        stepContentTransitioningClass: 'is-transitioning',
        sizeClass: 'is-',
        variantClass: 'is-'
    },
    button: {
        override: true,
        rootClass: 'btn',
        sizeClass: (_: string, { props }: any) => {
            if (props.size == 'small'){
                return 'btn-sm';
            }else if(props.size == 'medium') {
                return 'btn-md'
            }else if (props.size == 'large') {
                return 'btn-lg'
            }
        },
        variantClass: (_: string, { props }: any) => {
            if (props.outlined) return '';
            return `btn-${props.variant}`
        },
        // roundedClass: 'is-rounded',
        expandedClass: 'btn-expanded', // @TODO: add class
        outlinedClass: (_: string, { props }: any) => {
            return `btn-outline-${props.variant}`
        },
        // invertedClass: () => 'is-inverted',
        // elementsWrapperClass: 'button-wrapper'
    },
    skeleton: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['skeleton'];
            if (props.animated) classes.push('is-animated')
            return classes.join(' ')
        },
        itemClass: 'skeleton__item',
        itemRoundedClass: 'skeleton__item--rounded'
    },
    notification: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['alert','notification'];
            if (props.variant) classes.push(`alert-${props.variant}`)
            return classes.join(' ')
        },
        wrapperClass: 'alert-wrapper',
        // contentClass: '',
        iconClass: 'media-left',
        // closeClass: '',
        positionClass: 'is-',
        noticeClass: 'notices',
        noticePositionClass: 'is-'
    },
    dropdown: {
        override: true,
        itemTag: 'a',
        rootClass: (_: string, { props, data, computed }: any) => {
            const classes = ['dropdown', 'dropdown-menu-animation'];
            if (data.isActive || props.inline) classes.push('is-active')
            if (computed.hoverable) classes.push('is-hoverable')
            if (props.position) classes.push(`is-${props.position}`)
            return classes.join(' ')
        },
        triggerClass: 'dropdown-trigger',
        menuClass: 'dropdown-menu',
        disabledClass: 'is-disabled',
        expandedClass: 'is-expanded',
        inlineClass: 'is-inline',
        // menuPositionClass: 'is-',
        // menuActiveClass: 'is-active'
        itemClass: 'dropdown-item',
        itemActiveClass: 'is-active',
        itemDisabledClass: 'is-disabled',
        mobileClass: 'is-mobile-modal',
        menuMobileOverlayClass: 'background'
    },
    datepicker: {
        override: true,
        rootClass: 'datepicker',
        headerClass: 'datepicker-header',
        footerClass: 'datepicker-footer',
        boxClass: 'dropdown-item',
        tableClass: 'datepicker-table',
        tableHeadClass: 'datepicker-header',
        tableHeadCellClass: 'datepicker-cell',
        headerButtonsClass: 'pagination field is-centered',
        prevBtnClass: 'pagination-previous',
        nextBtnClass: 'pagination-next',
        listsClass: 'pagination-list',
        // tableBodyClass: 'datepicker-body',
        tableBodyClass: (_: string, { props }: any) => {
            const classes = ['datepicker-body'];
            if (props.events) classes.push(`has-events`);
            return classes.join(' ')
        },
        tableRowClass: 'datepicker-row',
        tableCellClass: 'datepicker-cell',
        tableCellSelectableClass: 'is-selectable',
        tableCellUnselectableClass: 'is-unselectable',
        tableCellTodayClass: 'is-today',
        tableCellSelectedClass: 'is-selected',
        tableCellWithinHoveredClass: 'is-within-hovered',
        tableCellFirstHoveredClass: 'is-first-hovered',
        tableCellLastHoveredClass: 'is-last-hovered',
        tableCellFirstSelectedClass: 'is-first-selected',
        tableCellLastSelectedClass: 'is-last-selected',
        tableCellWithinSelectedClass: 'is-within-selected',
        tableCellInvisibleClass: '',
        tableCellNearbyClass: 'is-nearby',
        tableCellEventsClass: (_: string, { props }: any) => {
            const classes = ['has-event'];
            if (props.indicators) classes.push(`${props.indicators}`);
            return classes.join(' ')
        },
        tableEventVariantClass: 'is-',
        tableEventsClass: 'events',
        tableEventClass: 'event',
    },
    modal: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['modal','fade'];
            if (props.active) classes.push('show')
            return classes.join(' ')
        },
        // overlayClass: 'modal-background',
        contentClass: 'modal-dialog',
        // closeClass: 'btn-close',
        // fullScreenClass: 'is-full-screen'
    },
    sidebar: {
        override: true,
        rootClass: 'b-sidebar',
        variantClass: 'is-',
        contentClass: 'sidebar-content',
        staticClass: 'is-static',
        absoluteClass: 'is-absolute',
        fixedClass: 'is-fixed',
        expandOnHoverClass: 'is-mini-expand',
        expandOnHoverFixedClass: 'is-mini-expand',
        fullheightClass: 'is-fullheight',
        fullwidthClass: 'is-fullwidth',
        mobileClass: (_: string, { props }: any) => {
            if (props.mobile && props.mobile !== 'reduce') {
                return `is-${props.mobile}-mobile`
            }
        },
        overlayClass: 'sidebar-background',
        reduceClass: 'is-mini-mobile',
        rightClass: 'is-right'
    },
    loading: {
        override: true, 
        fullPageClass: 'loading--fullpage',
        overlayClass: 'loading__overlay',
        iconClass: 'icon',
        rootClass: 'loading'
    },
    timepicker: {
        override: true,
        rootClass: 'timepicker control',
        boxClass: 'dropdown-item',
        selectClasses: {
            rootClass: 'select control'
        },
        separatorClass: 'is-colon control',
        footerClass: 'timepicker-footer',
        sizeClass: 'is-',
    },
    collapse: {
        override: true,
        // rootClass: 'collapse'
    }
}

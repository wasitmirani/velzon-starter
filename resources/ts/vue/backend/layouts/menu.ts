// let menu = JSON.parse(localStorage.getItem('menu_list') || '{}');;
let menu = [
    {
    "heading": "Analytics",
    "heading_can": "analytics-heading-view"
    },
    {
    "title": "Dashboards",
    "can": "dropdown-dashboards",
    "icon": "mdi-speedometer",
    "type": "multi",
    "sub_menu": [
    {
    "title": "Users",
    "icon": null,
    "can": "users-list",
    "route": "/portal/users"
    },
    {
    "title": "Roles",
    "icon": null,
    "can": "roles-list",
    "route": "/portal/roles"
    },
    {
    "title": "Permissions",
    "icon": null,
    "can": "permissions-list",
    "route": "/portal/permissions"
    }
    ]
    },
    {
    "heading": "Management",
    "heading_can": "management-heading-view"
    },
    {
    "title": "User Management",
    "can": "dropdown-usersmanagement",
    "icon": "mdi-account-group-outline",
    "type": "multi",
    "sub_menu": [
    {
    "title": "Users",
    "icon": null,
    "can": "users-list",
    "route": "/portal/users"
    },
    {
    "title": "Roles",
    "icon": null,
    "can": "roles-list",
    "route": "/portal/roles"
    },
    {
    "title": "Permissions",
    "icon": null,
    "can": "permissions-list",
    "route": "/portal/permissions"
    }
    ]
    },
    {
    "heading": "Apps & Pages",
    "heading_can": "apps-heading-view"
    },
    {
    "title": "Appearance",
    "can": "appearance-management-dropdown",
    "icon": "link",
    "type": "multi",
    "sub_menu": [
    {
    "title": "Package",
    "icon": null,
    "can": "packages-list-view",
    "route": "/portal/packages"
    }
    ]
    },
    {
    "heading": "Tools",
    "heading_can": "tools-heading-view"
    },
    {
    "title": "Settings",
    "type": "single_link",
    "icon": "settings",
    "can": "settings-view",
    "route": "/portal/settings"
    }
    ];
export default menu;

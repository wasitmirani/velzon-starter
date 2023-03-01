<?php

namespace App\Helpers;

class HelperComponent
{


    public static function SideBar()
    {
        $prefix = "portal";
        return [
            [
                "heading" => "Analytics",
                "heading_can" => "analytics-heading-view",
            ],
            [

                "title" => 'Dashboards',
                'can' => 'dropdown-dashboards',
                "icon" => "mdi-speedometer",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Overview",
                        null,
                        "dashboard-overview",
                        "/dashboard/overview",
                    ),



                ]

            ],
            [
                "heading" => "Management",
                "heading_can" => "management-heading-view",

            ],
            [

                "title" => 'User Management',
                'can' => 'dropdown-usersmanagement',
                "icon" => "mdi-account-group-outline",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Users",
                        null,
                        "users-read",
                        "/users",
                    ),
                    setSubMenu(
                        "Roles",
                        null,
                        "roles-read",
                        "/roles",
                    ),
                    setSubMenu(
                        "Permissions",
                        null,
                        "permissions-read",
                        "/permissions",
                    ),

                ]

            ],

            [
                "heading" => "Apps & Pages",
                "heading_can" => "apps-heading-view",

            ],
            [

                "title" => 'Appearance',
                'can' => 'appearance-management-dropdown',
                "icon" => "link",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Package",
                        null,
                        "packages-list-view",
                        "/packages",
                    ),
                ],
            ],
            [
                "heading" => "Tools",
                "heading_can" => "tools-heading-view",
            ],
            setSingleLink("Settings", "settings", "settings-view", "/settings"),

        ];
    }
}

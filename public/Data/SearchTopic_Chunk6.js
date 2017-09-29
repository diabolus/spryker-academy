define({"407":{i:0.0020884181925524,u:"../enablement/migration_guides/mg_payment.html",a:"Upgrading from version 3.* to version 4.*\n In the  Payment  module version 4 we added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer objects\n ...",t:"Migration Guide - Payment"},"408":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_product.html",a:"Upgrading from version 2.* to version 3.*\n The Product module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .\n\n Upgrading from version 3.* to version 4.*\n 1. Database migration\n vendor/bin/console propel:diff, also manual review is necessary for the generated ...",t:"Migration Guide - Product"},"409":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_product_bundle.html",a:"Upgrading from version 2.* to version 3.*\n\n In version 3 the calculator plugin changed together with new calculator version.\n\n The ProductBundlePriceAggregatorPlugin - moved to the SalesAggregator module, so you may need to change the namespace ...",t:"Migration Guide - Product Bundle"},"410":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_product_label.html",a:"Upgrading from version 1.* to version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product label rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"411":{i:0.00114895285948753,u:"../enablement/migration_guides/mg_product_management.html",a:"Upgrading from Version 0.7.* to Version 0.8.*\n If you’re migrating the ProductManagement module from version 0.7.x to version 0.8.x, you need to follow the steps described below.\n\n ProductManagement module persistence layer was moved into the new ProductAttribute module. ORM Entities Changed The ...",t:"Migration Guide - ProductManagement"},"412":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_product_option.html",a:"Upgrading from version 4.* to version 5.* In version 5 Product Options were updated to work with the new calculator concept. Therefore, the SalesAggregator plugin was moved to the SalesAggregator module SubtotalWithProductOptionsAggregatorPlugin. The sales option database tables received new columns ...",t:"Migration Guide - Product Option"},"413":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_product_option_discount_connector.html",a:"Migration Guide - ProductOptionDiscountConnector Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionDiscountConnector"},"414":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_product_option_exporter.html",a:"Migration Guide - ProductOptionExporter Upgrading from version 2.* to version 3.* The ProductOptionExporter module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionExporter"},"415":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_product_search.html",a:"Upgrading from version 3.* to version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"416":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_refund.html",a:"Upgrading from version 4.* to version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund"},"417":{i:0.00273884614872596,u:"../enablement/migration_guides/mg_sales.html",a:"Upgrading from Version 6.* to Version 7.* In Sales version 7, a new table for sales order item metadata (spy_sales_order_item_metadata) has been added. In order to migrate, the following table should be added: \nBEGIN;\n\nCREATE SEQUENCE \"spy_sales_order_item_metadata_pk_seq\";\n\nCREATE TABLE ...",t:"Migration Guide - Sales"},"418":{i:0.00234099650088495,u:"../enablement/migration_guides/mg_sales_aggregator.html",a:"Upgrading from version 4.* to version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator"},"419":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_sales_aggregator_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\SalesAggregator\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - SalesAggregator Migration Console Command"},"420":{i:0.00358861719012343,u:"../enablement/migration_guides/mg_shipment_and_customer_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Sales\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Sales Migration Console Command"},"421":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_search.html",a:"Upgrading from version 3.* to version 4.* With the version 4 of the Search module, the logic and configuration of how the results are sorted are changed. Previously there were two request parameters that controlled what field are we sorting by and what is the direction of the sort (e.g ...",t:"Migration Guide - Search"},"422":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_setup.html",a:"Upgrading from version 3.* to version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n   \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"423":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_shipment.html",a:"Upgrading from version 4.* to version 5.* In version 5, shipment lost the direct foreign key sales.fk_shipment_method to the sales_order table, it was replaced with the spy_sales_shipment table where all shipment information is stored. A new SalesOrderHydration plugin was added to populate ...",t:"Migration Guide - Shipment"},"424":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_stepengine.html",a:"Upgrading from version 2.* to version 3.*\n \nIf you\u0027re migrating the StepEngine bundle from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine"},"425":{i:0.0074100324875886,u:"../enablement/migration_guides/mg_tax.html",a:"Upgrading from version 4.* to version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax"},"426":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_transfer.html",a:"Upgrading from version 2.* to version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer"},"427":{i:0.000936111372869567,u:"../enablement/migration_guides/mg_wishlist.html",a:"Upgrading from version 2.* to version 3.*\n If you’re migrating the Wishlist module from version 2 to version 3, you need to follow the steps described below.\n\n Version 3 of the Wishlist module introduced new schema, and old tables have to be deleted while new created.\n\n First you need to drop old ...",t:"Migration Guide - Wishlist"},"428":{i:0.00134247949639103,u:"../enablement/tutorials/tutorials.html",a:"Tutorials are instructions that describe an entire process from pointy to point including information about performing several tasks. We provide tutorials for the following: Onboarding - Tutorials that describe how to perform basic tasks Backend - Zed related tasks Frontend - Yves related tasks ...",t:"Tutorials"},"429":{i:0.000936111372869567,u:"../enablement/tutorials/backend/t_backend.html",a:"Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the one you are currently on. Navigate next ...",t:"Backend Tutorials"},"430":{i:0.00109525123200597,u:"../enablement/tutorials/backend/t_add_navigation_zed.html",a:"This tutorial describes how to make your new controller action accessible in the navigation bar. There are two locations where you can define the navigation config : In the global config/Zed/navigation.xml config file Within your module in src/Pyz/Zed/{BundleName}/Communication/navigation.xml ...",t:"Tutorial - Adding Navigation in Zed"},"431":{i:0.00288095040318201,u:"../enablement/tutorials/backend/t_add_new_bundle.html",a:"In this tutorial we will create a test module: HelloWorld module; the module’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new module needs to be added on the project side to encapsulate that concept. The new module needs to follow the ...",t:"Tutorial - Adding a New module"},"432":{i:0.00140496577641114,u:"../enablement/tutorials/backend/t_calculator_plugin.html",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  Calculation module. First, there are ...",t:"Tutorial - Calculator Plugin"},"433":{i:0.000936111372869567,u:"../enablement/tutorials/backend/t_console_commands.html",a:"A console command is a PHP class that contains the implementation of a functionality that can get executed from the command line. Spryker offers a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. Implementing a New Console Command ...",t:"Tutorial - Console Commands"},"434":{i:0.000936111372869567,u:"../enablement/tutorials/backend/t_create_table_view.html",a:"This tutorial explains how to retrieve data from the database and render it in a table. Prerequisites: You have created a new module ( Tutorial - Adding a New module ). Create a QueryContainer Create the QueryContainer class in the HelloWorld module: mkdir -p ...",t:"Tutorial - Creating a Table View"},"435":{i:0.000936111372869567,u:"../enablement/tutorials/backend/t_customer_import.html",a:"This tutorial describes the steps you need to follow in order to extend the Importer module functionality. In this example, we’ll import customer data; of course you can update the code in this tutorial to fit your need. Customer Data file In order to import customer data from a legacy system, the ...",t:"Tutorial - Customer Import"},"436":{i:0.000936111372869567,u:"../enablement/tutorials/backend/t_database_transactions.html",a:"To reduce boilerplate code and properly handle database transactions you can use Spryker\\Zed\\PropelOrm\\Business\\Transaction\\DatabaseTransacti onHandlerTrait.\n\n Usage\n To use database transactions in the DatabaseTransactionHandlingExample class: Click to expand the code sample \u003c?php\n\nuse ...",t:"Tutorial - Database Transaction Handling"},"437":{i:0.00173181066855159,u:"../enablement/tutorials/backend/t_extend_db_schema.html",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},"438":{i:0.00246248012599323,u:"../enablement/tutorials/backend/t_extend_spryker.html",a:"To extend the Spryker-Core functionality and to use the Spryker Engine to develop a project, it’s important to understand the folder structure used in Spryker. The project consists of two parts : Spryker-Core and project implementation. They both follow the same structure and the project ...",t:"Tutorial - Extending Spryker"},"439":{i:0.000936111372869567,u:"../enablement/tutorials/backend/t_internationalization.html",a:"Challenge When running international business it is important to fine tune the behavior of a shop depending on the country. Topics that differ: Design \u0026 Layout Currency \u0026 price Tax calculation Languages Expense calculation Available Stocks from a different ERP/client Availability of shipment methods ...",t:"Tutorial - Internationalization"},"440":{i:0.000936111372869567,u:"../enablement/tutorials/backend/t_new_relic_monitoring.html",a:"Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that helps you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next you will need to install the New Relic PHP ...",t:"Tutorial - New Relic Monitoring"},"441":{i:0.000936111372869567,u:"../enablement/tutorials/challenges/t_challenges.html",a:"Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the one you are currently on. Navigate next ...",t:"Challenges"},"442":{i:0.000936111372869567,u:"../enablement/tutorials/challenges/t_boosting_cart_based_search.html",a:"Challenge Description Based on the colors of the products that are in the cart of the user, the catalog should first display products that have the same color. Let’s say for example that there’s a red product in the cart, then the top results in the catalog should also contain red products. ...",t:"Tutorial - Boosting Cart Based Search"},"443":{i:0.000936111372869567,u:"../enablement/tutorials/challenges/t_cms.html",a:"Challenge Description Create a static Contact Us page and integrate it into Yves. Then create your own template and use it. Challenge Solving Highlights Static page For creating a static page, follow the steps: Go to Zet UI and open the  CMS Pages  backend. Add a CMS page that uses the URL ...",t:"Tutorial - CMS"},"444":{i:0.000936111372869567,u:"../enablement/tutorials/challenges/t_dynamic_content_page.html",a:"Challenge Description Create a CMS page that displays some (marketing) text and a list of personalized products as offers. Challenge Solving Highlights Static page For creating a CMS page, follow these steps: Create a CMS template called personalized_products.twig under ...",t:"Tutorial - Dynamic Content Page"},"445":{i:0.000936111372869567,u:"../enablement/tutorials/challenges/t_hello_world.html",a:"Challenge Description Build a HelloWorld module in Yves that will render the Hello world! string on the page. Manually building the HelloWorld module in Yves  Using Code Generator To save even more time, you can use code generator from development tools shipped with Spryker  Code Generator console ...",t:"Tutorial - Hello World"},"446":{i:0.000936111372869567,u:"../enablement/tutorials/challenges/t_oms_state_machine.html",a:"Challenge Description Create a simple state machine that demonstrates an order process. The simple order process has the following states: new, paid, shipped, closed, returned, and invalid. We use the invalid state in case a payment is unauthorized (could be used with some other cases as well). In ...",t:"Tutorial - OMS State Machine"},"447":{i:0.000936111372869567,u:"../enablement/tutorials/challenges/t_zed_rest_api.html",a:"Challenge Description Spryker-based shop exposes module business logic through a simple API in Zed. The API is self-documented and can be easily explored for each module. Bonus challenge Create a simple client library to authorize and talk to Zed through API. Extract the controller endpoint from Zed ...",t:"Tutorial - Zed Rest API"},"448":{i:0.000936111372869567,u:"../enablement/tutorials/frontend/t_frontend.html",a:"Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the one you are currently on. Navigate next ...",t:"Frontend Tutorials"},"449":{i:0.000936111372869567,u:"../enablement/tutorials/frontend/t_add_button_table.html",a:"Depending on the button type that needs to be added (Update/Create/Remove/View), the following operations can be called : \u003c?php\n$this-\u003egenerateCreateButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array $buttonOptions);\n$this-\u003egenerateEditButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array ...",t:"Tutorial - Adding Buttons to Tables"},"450":{i:0.000936111372869567,u:"../enablement/tutorials/frontend/t_optimizing_search_boosting.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show you how to optimize the search results you get by configuring boosts. Why use boost? The search engine is one of the most important and critical ...",t:"Tutorial - Optimizing Search Results with Boosting"},"451":{i:0.00130995413507318,u:"../enablement/tutorials/frontend/t_search_.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show how to implement a simple product search using Spryker. This tutorial will not cover all aspects in detail to keep it focused. There will be links ...",t:"Tutorial - Search"},"452":{i:0.000936111372869567,u:"../enablement/tutorials/frontend/t_search_custom_setup.html",a:"There might be instances when you need to go beyond product search or you have very specific requirements regarding search. You’re not tied to the basic mapping that ships with Spryker. You can easily roll your own and set up custom analyzer very easily. The underlaying library that gets used by ...",t:"Tutorial - Search Custom Setup"},"453":{i:0.00152826160052258,u:"../enablement/tutorials/frontend/t_transfer_data_yves_zed.html",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"454":{i:0.00114643937914476,u:"../enablement/tutorials/frontend/t_twig_extensions.html",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the module you’re ...",t:"Tutorial - Twig Extensions"},"455":{i:0.00104978270082414,u:"../enablement/tutorials/frontend/t_using_translations.html",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},"456":{i:0.000936111372869567,u:"../enablement/tutorials/frontend/t_working_filter_facets.html",a:"A search engine is one of the most important functionalities in an online shops because it facilitates a better navigation, allowing the user to get to the products that are in his interest. The search engine should return a small number of items that match the query. Facets provide aggregated data ...",t:"Tutorial - Working with Filter Facets"},"457":{i:0.00712419208369209,u:"../enablement/tutorials/frontend/t_working_forms.html",a:"Spryker uses Symfony forms; this tutorial will help you get started on working with forms. You will build a simple newsletter subscription form that contains a field for entering the email address and a submit button. Follow the steps described below to create the newsletter subscription form: ...",t:"Tutorial - Working with Forms"},"458":{i:0.00624018055357459,u:"../enablement/tutorials/frontend/t_working_tables.html",a:"Spryker has a dedicated component to help you build tables for the Zed UI. This tutorial will help you get started on working with tables. Creating a New Table Configure the Table Prepare the Data Render the Table Creating a New Table To get started defining the new table, create a new class in your ...",t:"Tutorial - Working with Tables"},"459":{i:0.000936111372869567,u:"../enablement/tutorials/frontend/t_yves_bootstrap.html",a:"Yves and Zed are both built upon the  Silex micro-framework . So most concepts about modern web frameworks apply here as well. In static/public/Yves/index.php you will find the entry for the front-end application. \u003c?php\n$errorHandlerEnvironment = new ...",t:"Tutorial - Yves Bootstrapping"},"460":{i:0.000936111372869567,u:"../enablement/tutorials/onboarding/t_onboarding.html",a:"Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the one you are currently on. Navigate next ...",t:"Onboarding"},"461":{i:0.000936111372869567,u:"../enablement/tutorials/onboarding/t_checkout.html",a:"Challenge Description Integrate an additional step into the checkout process; a Voucher step where a customer enters a voucher code and gets a discount. Add the Voucher step after the Payment one. To explore further before starting, you can read about the  Checkout  and the  StepEngine  bundles. ...",t:"Tutorial: Checkout"},"462":{i:0.000936111372869567,u:"../enablement/tutorials/onboarding/t_hello_spryker.html",a:"This is an architecture walkthrough as a coding exercise. Challenge Description Build a HelloSpryker module in Zed that will render the Hello Spryker! string, in reverse order, on the screen. The string must be retrieved from the config. Build a HelloSpryker module in Yves that will render the Hello ...",t:"Tutorial: Hello Spryker"},"463":{i:0.000936111372869567,u:"../enablement/tutorials/onboarding/t_oms_invoice_state_machine.html",a:"Challenge Description Build a simple state machine that creates an invoice payment process. Add dummy commands and conditions and integrate it into checkout. Challenge Solving Highlights For this challenge, it was asked to create a state machine that models a simplified invoice payment process: ...",t:"Tutorial: OMS Invoice State Machine"},"464":{i:0.000936111372869567,u:"../enablement/tutorials/onboarding/t_product_challenge.html",a:"Challenge Description Add information to the products regarding the country where the product is being produced (e.g.: Made in “China”). Don’t add this information as an attribute. Display this information in the product details page in Yves. Bonus challenge: add glossary key for “Made in”. Show ...",t:"Tutorial: Product"},"465":{i:0.000936111372869567,u:"../enablement/tutorials/onboarding/t_product_challenge_solution.html",a:"ProductCountry Module (Zed) First, you need to create a new table with the name pyz_product_country. This table will be filled with demo data provided by a hard coded sku/country list in the ImportController of the module. File: ...",t:"Tutorial: Product Challenge Solution"},"466":{i:0.00269003942534418,u:"../enablement/tutorials/onboarding/t_stores.html",a:"Challenge Description Override a Zed core module on project level, and then override it on store level. You can also repeat the same challenge for a Yves module. Challenge Solving Highlights Project Level Let’s first override on the project level. Add an IndexController::indexAction() to ...",t:"Tutorial: Stores"},"467":{i:0.000963549279617223,u:"../enablement/videos___webinars/videos.html",a:"Spryker Videos We believe that good technology doesn’t stop with the code. You also need the examples and information to help you convert your vision into reality. Check out our videos for more information about Spryker OS here .",t:"Spryker Videos"},"468":{i:0.00203892170914661,u:"../enablement/videos___webinars/feature_walkthrough_videos.html",a:"The Spryker Academy has its own  Playlist  on the Spryker YouTube Channel. Be sure to, Like, Subscribe Follow and Share to receive the latest updates. You can also send us direct requests for videos and topics to  academy@spryker.com Product Management Introduction to the Demoshop Wishlists CMS ...",t:"Feature Walkthrough Videos"},"469":{i:0.000936111372869567,u:"../first_name.html",a:"first name Delete this text and replace it with your own content.",t:"first name"},"470":{i:0.000936111372869567,u:"../index.html",a:"Spryker Knowledge Planning to use Spryker? All you need to know about using and setting up the Spryker Commerce Operating System. Understanding Spryker Get to know what Spryker is and how you can easily adopt the Commerce OS for building your\n                                    e-commerce presence. ...",t:"Spryker Academy"},"471":{i:0.000936111372869567,u:"../developing_with_spryker/3rd-party_integration/ratepay/payment_integration_ratepay.html",a:"BETA version\n This module is still in development. RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods. RatePAY bears the full risk and takes over the complete processing.\n\n RatePAY provides four methods of payment:\n\n Invoice - ...",t:"Payment Integration - RatePAY"},"472":{i:0.00133396102071058,u:"../developing_with_spryker/store_administration_guide/shipment/bg_shipment_creating_method.html",a:"A shipment method is described by : delivery price (how is the price for a delivery calculated?) delivery time (what’s the estimated time for the delivery?) availability (when is the shipment method available?) Each shipment method has its own specificity, so these 3 aspects must be configured(this ...",t:"Creating a Shipment Method"},"473":{i:0.000963549279617223,u:"../developing_with_spryker/3rd-party_integration/payolution/integration_payment_payolution.html",a:"Payolution provides two methods of payment:\n\n Invoice \nInstallment\n In order to integrate Payolution payments, a Payolution merchant account should be created and configuration data then could be obtained from Payolution. There are two types of accounts for the integration: test and live accounts. ...",t:"Payment Integration - Payolution"},"474":{i:0.00133396102071058,u:"../understanding_spryker/product_management.html",a:"Product data is central data for shops. It contains characteristics that describe the product as well as characteristics that define their appearance in the shop. For example, the color of a product is an important information that the customer might need, whereas the weight of the product is needed ...",t:"Product Management"},"475":{i:0.00133396102071058,u:"../developing_with_spryker/store_administration_guide/shipment/bg_shipment_creating_carrier.html",a:"Creating a Carrier Company - Shipment",t:"Creating a Carrier Company - Shipment"},"476":{i:0.000936111372869567,u:"../developing_with_spryker/store_administration_guide/shipment/bg_shipment.html",a:"The carrier companies that you want to have integrated in the shop can be configured from the back-office UI. For each carrier company you can add one or more shipment methods that you want to enable in the shop. A carrier company refers to a company that provides shipment services (e.g.: DHL, UPS, ...",t:"Shipment"},"477":{i:0.00175513306032267,u:"../disclaimer.html",a:"Urheber \u0026 Haftungsausschluss für Publikationen Veröffentlicht in Berlin von der: Spryker Systems GmbH Julie-Wolfthorn-Strasse 1 10115 Berlin – DEUTSCHLAND eMail:  info@spryker.com Telefon: +49 (0) 30 208498351 Der Inhalt dieser Publikation ist unverbindlich und dient ausschließlich ...",t:"Disclaimer"},});
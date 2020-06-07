import React from 'react';

import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Contacts from '../components/contacts';
import Delivery from '../components/delivery';
import AboutUs from '../components/about-us';
import api from '../api';

// import chickinnImg from '../assets/chickinn.jpg';
// import chickinnMobileImg from '../assets/chickinn-mobile.jpg';

const Index = ({
  categoriesWithProducts = [
    {
      id: 22,
      name: 'Combo',
      slug: 'combo',
      parent: 0,
      description: 'combo menu',
      display: 'products',
      image: {
        id: 62,
        date_created: '2020-05-13T09:27:40',
        date_created_gmt: '2020-05-13T09:27:40',
        date_modified: '2020-05-13T09:27:40',
        date_modified_gmt: '2020-05-13T09:27:40',
        src: 'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/1490982273193754516.jpg',
        name: '1490982273193754516',
        alt: '',
      },
      menu_order: 1,
      count: 1,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/22',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
      data: [
        {
          id: 107,
          name: 'Crispy Combo',
          slug: 'crispy-combo',
          permalink: 'http://localhost:8888/chicken-md/product/crispy-combo/',
          date_created: '2020-05-13T21:02:38',
          date_created_gmt: '2020-05-13T21:02:38',
          date_modified: '2020-05-13T21:02:38',
          date_modified_gmt: '2020-05-13T21:02:38',
          type: 'simple',
          status: 'publish',
          featured: false,
          catalog_visibility: 'visible',
          description: '',
          short_description: '',
          sku: '',
          price: '75',
          regular_price: '75',
          sale_price: '',
          date_on_sale_from: null,
          date_on_sale_from_gmt: null,
          date_on_sale_to: null,
          date_on_sale_to_gmt: null,
          price_html:
            '<span class="woocommerce-Price-amount amount">75.00<span class="woocommerce-Price-currencySymbol">MDL</span></span>',
          on_sale: false,
          purchasable: true,
          total_sales: 1,
          virtual: false,
          downloadable: false,
          downloads: [],
          download_limit: -1,
          download_expiry: -1,
          external_url: '',
          button_text: '',
          tax_status: 'taxable',
          tax_class: '',
          manage_stock: false,
          stock_quantity: null,
          stock_status: 'instock',
          backorders: 'no',
          backorders_allowed: false,
          backordered: false,
          sold_individually: false,
          weight: '',
          dimensions: {
            length: '',
            width: '',
            height: '',
          },
          shipping_required: true,
          shipping_taxable: true,
          shipping_class: '',
          shipping_class_id: 0,
          reviews_allowed: false,
          average_rating: '0.00',
          rating_count: 0,
          related_ids: [],
          upsell_ids: [],
          cross_sell_ids: [],
          parent_id: 0,
          purchase_note: '',
          categories: [
            {
              id: 22,
              name: 'Combo',
              slug: 'combo',
            },
          ],
          tags: [],
          images: [
            {
              id: 102,
              date_created: '2020-05-13T20:44:37',
              date_created_gmt: '2020-05-13T20:44:37',
              date_modified: '2020-05-13T20:44:37',
              date_modified_gmt: '2020-05-13T20:44:37',
              src:
                'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/Food0289-scaled.jpg',
              name: 'Food0289',
              alt: '',
            },
          ],
          attributes: [],
          default_attributes: [],
          variations: [],
          grouped_products: [],
          menu_order: 0,
          meta_data: [
            {
              id: 617,
              key: '_product_addons',
              value: [],
            },
            {
              id: 618,
              key: '_product_addons_exclude_global',
              value: '0',
            },
          ],
          _links: {
            self: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/107',
              },
            ],
            collection: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products',
              },
            ],
          },
        },
      ],
    },
    {
      id: 21,
      name: 'Rolls',
      slug: 'rolls',
      parent: 0,
      description: 'rolls',
      display: 'products',
      image: {
        id: 60,
        date_created: '2020-05-13T09:24:13',
        date_created_gmt: '2020-05-13T09:24:13',
        date_modified: '2020-05-13T09:24:13',
        date_modified_gmt: '2020-05-13T09:24:13',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/94627017_2651234468314640_7178304305172156235_n.jpg',
        name: '94627017_2651234468314640_7178304305172156235_n',
        alt: '',
      },
      menu_order: 2,
      count: 2,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/21',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
      data: [
        {
          id: 51,
          name: 'Crispy Roll',
          slug: 'crispy-roll',
          permalink: 'http://localhost:8888/chicken-md/product/crispy-roll/',
          date_created: '2020-05-12T10:41:53',
          date_created_gmt: '2020-05-12T10:41:53',
          date_modified: '2020-05-14T11:32:13',
          date_modified_gmt: '2020-05-14T11:32:13',
          type: 'simple',
          status: 'publish',
          featured: false,
          catalog_visibility: 'visible',
          description: '',
          short_description: '',
          sku: '',
          price: '59',
          regular_price: '59',
          sale_price: '',
          date_on_sale_from: null,
          date_on_sale_from_gmt: null,
          date_on_sale_to: null,
          date_on_sale_to_gmt: null,
          price_html:
            '<span class="woocommerce-Price-amount amount">59.00<span class="woocommerce-Price-currencySymbol">MDL</span></span>',
          on_sale: false,
          purchasable: true,
          total_sales: 3,
          virtual: false,
          downloadable: false,
          downloads: [],
          download_limit: -1,
          download_expiry: -1,
          external_url: '',
          button_text: '',
          tax_status: 'taxable',
          tax_class: '',
          manage_stock: false,
          stock_quantity: null,
          stock_status: 'instock',
          backorders: 'no',
          backorders_allowed: false,
          backordered: false,
          sold_individually: false,
          weight: '',
          dimensions: {
            length: '',
            width: '',
            height: '',
          },
          shipping_required: true,
          shipping_taxable: true,
          shipping_class: '',
          shipping_class_id: 0,
          reviews_allowed: false,
          average_rating: '0.00',
          rating_count: 0,
          related_ids: [49],
          upsell_ids: [],
          cross_sell_ids: [],
          parent_id: 0,
          purchase_note: '',
          categories: [
            {
              id: 21,
              name: 'Rolls',
              slug: 'rolls',
            },
          ],
          tags: [],
          images: [
            {
              id: 52,
              date_created: '2020-05-12T10:42:58',
              date_created_gmt: '2020-05-12T10:42:58',
              date_modified: '2020-05-12T10:43:27',
              date_modified_gmt: '2020-05-12T10:43:27',
              src:
                'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/Food0107-1-scaled.jpg',
              name: 'Crispy Roll',
              alt: 'Crispy Roll',
            },
          ],
          attributes: [],
          default_attributes: [],
          variations: [],
          grouped_products: [],
          menu_order: 5,
          meta_data: [
            {
              id: 684,
              key: '_product_addons',
              value: [
                {
                  name: 'Сыр Чеддар (40g)',
                  title_format: 'label',
                  description_enable: 0,
                  description: '',
                  type: 'input_multiplier',
                  display: 'select',
                  position: 0,
                  required: 0,
                  restrictions: 0,
                  restrictions_type: 'any_text',
                  adjust_price: 1,
                  price_type: 'flat_fee',
                  price: '6',
                  min: 0,
                  max: 0,
                  options: [
                    {
                      label: '',
                      price: '',
                      image: '',
                      price_type: 'flat_fee',
                    },
                  ],
                },
                {
                  name: 'Томаты (50g)',
                  title_format: 'label',
                  description_enable: 0,
                  description: '',
                  type: 'input_multiplier',
                  display: 'select',
                  position: 1,
                  required: 0,
                  restrictions: 0,
                  restrictions_type: 'any_text',
                  adjust_price: 1,
                  price_type: 'flat_fee',
                  price: '10',
                  min: 0,
                  max: 0,
                  options: [
                    {
                      label: '',
                      price: '',
                      image: '',
                      price_type: 'flat_fee',
                    },
                  ],
                },
              ],
            },
            {
              id: 685,
              key: '_product_addons_exclude_global',
              value: '0',
            },
          ],
          _links: {
            self: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/51',
              },
            ],
            collection: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products',
              },
            ],
          },
        },
        {
          id: 49,
          name: "Chick'Inn Roll",
          slug: 'chicken-wrap',
          permalink: 'http://localhost:8888/chicken-md/product/chicken-wrap/',
          date_created: '2020-04-14T14:48:50',
          date_created_gmt: '2020-04-14T14:48:50',
          date_modified: '2020-05-13T18:04:10',
          date_modified_gmt: '2020-05-13T18:04:10',
          type: 'simple',
          status: 'publish',
          featured: false,
          catalog_visibility: 'visible',
          description:
            '<p>Lavaș, carne de pui, sos alb, castraveți marinați, roșii, varză proaspătă, ceapă marinată</p>\n',
          short_description: '',
          sku: '',
          price: '49',
          regular_price: '49',
          sale_price: '',
          date_on_sale_from: null,
          date_on_sale_from_gmt: null,
          date_on_sale_to: null,
          date_on_sale_to_gmt: null,
          price_html:
            '<span class="woocommerce-Price-amount amount">49.00<span class="woocommerce-Price-currencySymbol">MDL</span></span>',
          on_sale: false,
          purchasable: true,
          total_sales: 5,
          virtual: false,
          downloadable: false,
          downloads: [],
          download_limit: -1,
          download_expiry: -1,
          external_url: '',
          button_text: '',
          tax_status: 'taxable',
          tax_class: '',
          manage_stock: false,
          stock_quantity: null,
          stock_status: 'instock',
          backorders: 'no',
          backorders_allowed: false,
          backordered: false,
          sold_individually: false,
          weight: '380',
          dimensions: {
            length: '',
            width: '',
            height: '',
          },
          shipping_required: true,
          shipping_taxable: true,
          shipping_class: '',
          shipping_class_id: 0,
          reviews_allowed: false,
          average_rating: '0.00',
          rating_count: 0,
          related_ids: [51],
          upsell_ids: [],
          cross_sell_ids: [],
          parent_id: 0,
          purchase_note: '',
          categories: [
            {
              id: 21,
              name: 'Rolls',
              slug: 'rolls',
            },
          ],
          tags: [],
          images: [
            {
              id: 53,
              date_created: '2020-05-12T10:44:15',
              date_created_gmt: '2020-05-12T10:44:15',
              date_modified: '2020-05-12T10:44:45',
              date_modified_gmt: '2020-05-12T10:44:45',
              src:
                'http://localhost:8888/chicken-md/wp-content/uploads/2020/04/Food0100-scaled.jpg',
              name: 'Chick&#8217;Inn Roll',
              alt: "Chick'Inn Roll",
            },
          ],
          attributes: [
            {
              id: 0,
              name: 'weight',
              position: 0,
              visible: true,
              variation: false,
              options: ['380'],
            },
          ],
          default_attributes: [],
          variations: [],
          grouped_products: [],
          menu_order: 4,
          meta_data: [
            {
              id: 474,
              key: '_product_addons',
              value: [],
            },
            {
              id: 475,
              key: '_product_addons_exclude_global',
              value: '0',
            },
          ],
          _links: {
            self: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/49',
              },
            ],
            collection: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products',
              },
            ],
          },
        },
      ],
    },
    {
      id: 20,
      name: 'Snacks',
      slug: 'snacks',
      parent: 0,
      description: 'снэки',
      display: 'products',
      image: {
        id: 59,
        date_created: '2020-05-13T09:24:12',
        date_created_gmt: '2020-05-13T09:24:12',
        date_modified: '2020-05-13T09:24:12',
        date_modified_gmt: '2020-05-13T09:24:12',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/94835045_2529100553861221_3264369530096323279_n.jpg',
        name: '94835045_2529100553861221_3264369530096323279_n',
        alt: '',
      },
      menu_order: 3,
      count: 2,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/20',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
      data: [
        {
          id: 106,
          name: "Chick'Inn Nuggets",
          slug: 'chickinn-nuggets',
          permalink: 'http://localhost:8888/chicken-md/product/chickinn-nuggets/',
          date_created: '2020-05-13T21:00:34',
          date_created_gmt: '2020-05-13T21:00:34',
          date_modified: '2020-05-13T21:02:54',
          date_modified_gmt: '2020-05-13T21:02:54',
          type: 'simple',
          status: 'publish',
          featured: false,
          catalog_visibility: 'visible',
          description: '',
          short_description: '',
          sku: '',
          price: '55',
          regular_price: '55',
          sale_price: '',
          date_on_sale_from: null,
          date_on_sale_from_gmt: null,
          date_on_sale_to: null,
          date_on_sale_to_gmt: null,
          price_html:
            '<span class="woocommerce-Price-amount amount">55.00<span class="woocommerce-Price-currencySymbol">MDL</span></span>',
          on_sale: false,
          purchasable: true,
          total_sales: 2,
          virtual: false,
          downloadable: false,
          downloads: [],
          download_limit: -1,
          download_expiry: -1,
          external_url: '',
          button_text: '',
          tax_status: 'taxable',
          tax_class: '',
          manage_stock: false,
          stock_quantity: null,
          stock_status: 'instock',
          backorders: 'no',
          backorders_allowed: false,
          backordered: false,
          sold_individually: false,
          weight: '180',
          dimensions: {
            length: '',
            width: '',
            height: '',
          },
          shipping_required: true,
          shipping_taxable: true,
          shipping_class: '',
          shipping_class_id: 0,
          reviews_allowed: false,
          average_rating: '0.00',
          rating_count: 0,
          related_ids: [63],
          upsell_ids: [],
          cross_sell_ids: [],
          parent_id: 0,
          purchase_note: '',
          categories: [
            {
              id: 20,
              name: 'Snacks',
              slug: 'snacks',
            },
          ],
          tags: [],
          images: [
            {
              id: 93,
              date_created: '2020-05-13T20:42:05',
              date_created_gmt: '2020-05-13T20:42:05',
              date_modified: '2020-05-13T20:42:05',
              date_modified_gmt: '2020-05-13T20:42:05',
              src:
                'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/Food0154-1-scaled.jpg',
              name: 'Food0154 1',
              alt: '',
            },
          ],
          attributes: [],
          default_attributes: [],
          variations: [],
          grouped_products: [],
          menu_order: 0,
          meta_data: [
            {
              id: 594,
              key: '_product_addons',
              value: [],
            },
            {
              id: 595,
              key: '_product_addons_exclude_global',
              value: '0',
            },
          ],
          _links: {
            self: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/106',
              },
            ],
            collection: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products',
              },
            ],
          },
        },
        {
          id: 63,
          name: 'Cartofi',
          slug: 'cartofi',
          permalink: 'http://localhost:8888/chicken-md/product/cartofi/',
          date_created: '2020-05-13T09:42:58',
          date_created_gmt: '2020-05-13T09:42:58',
          date_modified: '2020-05-13T09:42:58',
          date_modified_gmt: '2020-05-13T09:42:58',
          type: 'simple',
          status: 'publish',
          featured: false,
          catalog_visibility: 'visible',
          description: '',
          short_description: '',
          sku: '',
          price: '25',
          regular_price: '25',
          sale_price: '',
          date_on_sale_from: null,
          date_on_sale_from_gmt: null,
          date_on_sale_to: null,
          date_on_sale_to_gmt: null,
          price_html:
            '<span class="woocommerce-Price-amount amount">25.00<span class="woocommerce-Price-currencySymbol">MDL</span></span>',
          on_sale: false,
          purchasable: true,
          total_sales: 0,
          virtual: false,
          downloadable: false,
          downloads: [],
          download_limit: -1,
          download_expiry: -1,
          external_url: '',
          button_text: '',
          tax_status: 'taxable',
          tax_class: '',
          manage_stock: false,
          stock_quantity: null,
          stock_status: 'instock',
          backorders: 'no',
          backorders_allowed: false,
          backordered: false,
          sold_individually: false,
          weight: '',
          dimensions: {
            length: '',
            width: '',
            height: '',
          },
          shipping_required: true,
          shipping_taxable: true,
          shipping_class: '',
          shipping_class_id: 0,
          reviews_allowed: true,
          average_rating: '0.00',
          rating_count: 0,
          related_ids: [106],
          upsell_ids: [],
          cross_sell_ids: [],
          parent_id: 0,
          purchase_note: '',
          categories: [
            {
              id: 20,
              name: 'Snacks',
              slug: 'snacks',
            },
          ],
          tags: [],
          images: [
            {
              id: 67,
              date_created: '2020-05-13T09:42:15',
              date_created_gmt: '2020-05-13T09:42:15',
              date_modified: '2020-05-13T09:42:15',
              date_modified_gmt: '2020-05-13T09:42:15',
              src:
                'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/79c8a390c2e8423ab6affa0aca5cd5c0_big.png',
              name: '79c8a390c2e8423ab6affa0aca5cd5c0_big',
              alt: '',
            },
          ],
          attributes: [],
          default_attributes: [],
          variations: [],
          grouped_products: [],
          menu_order: 6,
          meta_data: [],
          _links: {
            self: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/63',
              },
            ],
            collection: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products',
              },
            ],
          },
        },
      ],
    },
    {
      id: 29,
      name: 'Salads',
      slug: 'salads',
      parent: 0,
      description: 'Salads',
      display: 'default',
      image: {
        id: 74,
        date_created: '2020-05-13T20:27:58',
        date_created_gmt: '2020-05-13T20:27:58',
        date_modified: '2020-05-13T20:27:58',
        date_modified_gmt: '2020-05-13T20:27:58',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/75cf4d3177b74398b2c6ab4ff90205bc_middle.png',
        name: '75cf4d3177b74398b2c6ab4ff90205bc_middle',
        alt: '',
      },
      menu_order: 4,
      count: 2,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/29',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
    {
      id: 28,
      name: 'Soups',
      slug: 'soups',
      parent: 0,
      description: 'soups',
      display: 'products',
      image: {
        id: 73,
        date_created: '2020-05-13T20:27:57',
        date_created_gmt: '2020-05-13T20:27:57',
        date_modified: '2020-05-13T20:27:57',
        date_modified_gmt: '2020-05-13T20:27:57',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/a9cb020d5a17486bb0fc28fcdc97e600_middle-1.png',
        name: 'a9cb020d5a17486bb0fc28fcdc97e600_middle-1',
        alt: '',
      },
      menu_order: 5,
      count: 1,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/28',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
      data: [
        {
          id: 108,
          name: 'Zeama',
          slug: 'zeama',
          permalink: 'http://localhost:8888/chicken-md/product/zeama/',
          date_created: '2020-05-13T21:04:17',
          date_created_gmt: '2020-05-13T21:04:17',
          date_modified: '2020-05-13T21:04:24',
          date_modified_gmt: '2020-05-13T21:04:24',
          type: 'simple',
          status: 'publish',
          featured: false,
          catalog_visibility: 'visible',
          description: '',
          short_description: '',
          sku: '',
          price: '45',
          regular_price: '45',
          sale_price: '',
          date_on_sale_from: null,
          date_on_sale_from_gmt: null,
          date_on_sale_to: null,
          date_on_sale_to_gmt: null,
          price_html:
            '<span class="woocommerce-Price-amount amount">45.00<span class="woocommerce-Price-currencySymbol">MDL</span></span>',
          on_sale: false,
          purchasable: true,
          total_sales: 0,
          virtual: false,
          downloadable: false,
          downloads: [],
          download_limit: -1,
          download_expiry: -1,
          external_url: '',
          button_text: '',
          tax_status: 'taxable',
          tax_class: '',
          manage_stock: false,
          stock_quantity: null,
          stock_status: 'instock',
          backorders: 'no',
          backorders_allowed: false,
          backordered: false,
          sold_individually: false,
          weight: '300',
          dimensions: {
            length: '',
            width: '',
            height: '',
          },
          shipping_required: true,
          shipping_taxable: true,
          shipping_class: '',
          shipping_class_id: 0,
          reviews_allowed: false,
          average_rating: '0.00',
          rating_count: 0,
          related_ids: [],
          upsell_ids: [],
          cross_sell_ids: [],
          parent_id: 0,
          purchase_note: '',
          categories: [
            {
              id: 28,
              name: 'Soups',
              slug: 'soups',
            },
          ],
          tags: [],
          images: [
            {
              id: 98,
              date_created: '2020-05-13T20:43:29',
              date_created_gmt: '2020-05-13T20:43:29',
              date_modified: '2020-05-13T20:43:29',
              date_modified_gmt: '2020-05-13T20:43:29',
              src:
                'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/Food0238-scaled.jpg',
              name: 'Food0238',
              alt: '',
            },
          ],
          attributes: [],
          default_attributes: [],
          variations: [],
          grouped_products: [],
          menu_order: 0,
          meta_data: [
            {
              id: 639,
              key: '_product_addons',
              value: [],
            },
            {
              id: 640,
              key: '_product_addons_exclude_global',
              value: '0',
            },
          ],
          _links: {
            self: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/108',
              },
            ],
            collection: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products',
              },
            ],
          },
        },
      ],
    },
    {
      id: 30,
      name: 'Sauces',
      slug: 'sauces',
      parent: 0,
      description: 'Sauces',
      display: 'default',
      image: {
        id: 75,
        date_created: '2020-05-13T20:27:59',
        date_created_gmt: '2020-05-13T20:27:59',
        date_modified: '2020-05-13T20:27:59',
        date_modified_gmt: '2020-05-13T20:27:59',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/514adf3a3bff46ca95e6e957f70f1378_middle.png',
        name: '514adf3a3bff46ca95e6e957f70f1378_middle',
        alt: '',
      },
      menu_order: 6,
      count: 0,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/30',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
    {
      id: 19,
      name: 'Drinks',
      slug: 'drinks',
      parent: 0,
      description: 'напитки',
      display: 'products',
      image: {
        id: 61,
        date_created: '2020-05-13T09:24:13',
        date_created_gmt: '2020-05-13T09:24:13',
        date_modified: '2020-05-13T09:24:13',
        date_modified_gmt: '2020-05-13T09:24:13',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/94555311_611085072824632_6237355728356379859_n.jpg',
        name: '94555311_611085072824632_6237355728356379859_n',
        alt: '',
      },
      menu_order: 7,
      count: 1,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/19',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
      data: [
        {
          id: 68,
          name: 'Dorna Plata',
          slug: 'dorna-plata',
          permalink: 'http://localhost:8888/chicken-md/product/dorna-plata/',
          date_created: '2020-05-13T09:43:41',
          date_created_gmt: '2020-05-13T09:43:41',
          date_modified: '2020-05-13T09:43:57',
          date_modified_gmt: '2020-05-13T09:43:57',
          type: 'simple',
          status: 'publish',
          featured: false,
          catalog_visibility: 'visible',
          description: '',
          short_description: '',
          sku: '',
          price: '18',
          regular_price: '18',
          sale_price: '',
          date_on_sale_from: null,
          date_on_sale_from_gmt: null,
          date_on_sale_to: null,
          date_on_sale_to_gmt: null,
          price_html:
            '<span class="woocommerce-Price-amount amount">18.00<span class="woocommerce-Price-currencySymbol">MDL</span></span>',
          on_sale: false,
          purchasable: true,
          total_sales: 0,
          virtual: false,
          downloadable: false,
          downloads: [],
          download_limit: -1,
          download_expiry: -1,
          external_url: '',
          button_text: '',
          tax_status: 'taxable',
          tax_class: '',
          manage_stock: false,
          stock_quantity: null,
          stock_status: 'instock',
          backorders: 'no',
          backorders_allowed: false,
          backordered: false,
          sold_individually: false,
          weight: '',
          dimensions: {
            length: '',
            width: '',
            height: '',
          },
          shipping_required: true,
          shipping_taxable: true,
          shipping_class: '',
          shipping_class_id: 0,
          reviews_allowed: true,
          average_rating: '0.00',
          rating_count: 0,
          related_ids: [],
          upsell_ids: [],
          cross_sell_ids: [],
          parent_id: 0,
          purchase_note: '',
          categories: [
            {
              id: 19,
              name: 'Drinks',
              slug: 'drinks',
            },
          ],
          tags: [],
          images: [
            {
              id: 66,
              date_created: '2020-05-13T09:42:14',
              date_created_gmt: '2020-05-13T09:42:14',
              date_modified: '2020-05-13T09:42:14',
              date_modified_gmt: '2020-05-13T09:42:14',
              src:
                'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/fca28ffc311c4a50bae4ab08f55f8a5b_middle.png',
              name: 'fca28ffc311c4a50bae4ab08f55f8a5b_middle',
              alt: '',
            },
          ],
          attributes: [],
          default_attributes: [],
          variations: [],
          grouped_products: [],
          menu_order: 7,
          meta_data: [],
          _links: {
            self: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/68',
              },
            ],
            collection: [
              {
                href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products',
              },
            ],
          },
        },
      ],
    },
    {
      id: 15,
      name: 'Uncategorized',
      slug: 'uncategorized',
      parent: 0,
      description: '',
      display: 'default',
      image: null,
      menu_order: 8,
      count: 0,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/15',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
  ],
}) => {
  return (
    <Layout>
      <ProductsList categoriesWithProducts={categoriesWithProducts} />
      <Contacts />
      <Delivery />
      <AboutUs />
    </Layout>
  );
};

export async function getStaticProps() {
  const { data: categories } = await api.getCategories();
  const { data: products } = await api.getProducts();

  categories.forEach((category) => {
    if (category.count > 0 && category.display === 'products') {
      products.map((product) => {
        if (product.categories.some((productCategory) => category.id === productCategory.id)) {
          if (category.data?.length > 0) {
            category.data.push(product);
          } else {
            category.data = [product];
          }
        }
      });
    }
  });

  return {
    props: {
      // categoriesWithProducts: categories,
    },
  };
}

export default Index;

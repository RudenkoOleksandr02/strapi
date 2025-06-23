import type { Schema, Struct } from '@strapi/strapi';

export interface FurnitureValues extends Struct.ComponentSchema {
  collectionName: 'components_furniture_values';
  info: {
    displayName: 'values';
  };
  attributes: {
    article: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    inStock: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    priceDollars: Schema.Attribute.BigInteger;
  };
}

export interface ProductValues extends Struct.ComponentSchema {
  collectionName: 'components_product_values';
  info: {
    displayName: 'values';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaKeys: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    pre_description: Schema.Attribute.Text;
    price: Schema.Attribute.BigInteger;
  };
}

export interface SeoValues extends Struct.ComponentSchema {
  collectionName: 'components_seo_values';
  info: {
    displayName: 'values';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    keywords: Schema.Attribute.Text & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShowerFurnitureColor extends Struct.ComponentSchema {
  collectionName: 'components_shower_furniture_colors';
  info: {
    displayName: 'furnitureColor';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.Required;
    priceDollars: Schema.Attribute.BigInteger & Schema.Attribute.Required;
  };
}

export interface ShowerWidth extends Struct.ComponentSchema {
  collectionName: 'components_shower_widths';
  info: {
    displayName: 'width';
  };
  attributes: {
    width: Schema.Attribute.BigInteger & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'furniture.values': FurnitureValues;
      'product.values': ProductValues;
      'seo.values': SeoValues;
      'shower.furniture-color': ShowerFurnitureColor;
      'shower.width': ShowerWidth;
    }
  }
}

import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";

export type TIdAndName = {
  id: string;
  name: string;
};
export type TLang = TIdAndName & {
  language: number;
};
export type TId = string;
export type TDataWithId = {
  id: string;
  // Add other properties here if needed
};

export type TRoute = {
  name: string;
  path: string;
  icon?: React.ReactNode;
  element?: React.ReactNode;
  children?: TRoute[] | undefined;
  isSidebar?: boolean;
  accordion?: boolean;
  // index?: boolean | undefined;
};

export type ButtonType = "button" | "submit" | "reset";

export type CreateFaceInput = {
  name: string;
  // cover: string;
};
export type TValidate = Array<number | string> | Array<string> | unknown[];

export type MenuFormValues = {
  name: string;
  id: string;
  template: string;
};
export type MenuFormValuesUpdate = {
  name: string;
  id?: string;
  template: string;
};

export interface MenuFormProps {
  defaultValues?: MenuFormValues;
  onFormSubmit: (data: MenuFormValues) => void;
}
export type MenuItemFormValues = {
  menu: string;
  parent: string;
  is_draft: boolean;
  url_type: string;
  page?: string | null;
  section?: string | null;
  menu_item_assets?:
    | { asset?: IAssetBuilder }[]
    | (string & { asset?: IAssetBuilder })[];

  item_languages: {
    name: string;
    content: string;
    path: string | null;
    page?: string | null;
    section?: string | null;
    language: string;
  }[];
};

export interface MenuItemFormProps {
  defaultValues?: MenuItemFormValues;
  onFormSubmit: (data: MenuItemFormValues) => void;
}

export interface PageLanguage {
  language: string;
  name: string;
  title: string;
  // summary: string;
  // page: string | null;
  // section: string | null;
  path?: string | null;
  // content: string;
  description: string;
}

export interface PageFormValues {
  params_qty: number;
  name: string;
  page_type?: string;
  page_languages: PageLanguage[];
  is_draft?: string;
  has_params?: boolean;
  parent?: string | null;
  template?: number | string | null;
  use_global_sections?: boolean;
}

export interface PageFormProps {
  defaultValues?: PageFormValues;
  onFormSubmit: (data: PageFormValues) => void;
}

export interface SectionFormValues {
  name: string;
  is_draft?: string | null;
  section_languages: {
    name: string;
    title: string;
    language: string;
    id?: string | null | undefined;
  }[];
  menu?: string | undefined;
}

export interface SectionFormProps {
  defaultValues?: SectionFormValues;
  onFormSubmit: (data: SectionFormValues) => void;
}
export interface WidgetFormValues {
  name: string;
  template: string;
  category: SelectedItemType | string;
  client: string;
  is_internal: boolean;
}

export interface WidgetFormProps {
  defaultValues?: WidgetFormValues;
  onFormSubmit: (data: WidgetFormValues) => void;
}
export interface PairSectionWidgetFormValues {
  name: string;
  section: string;
  widget: string;
}

export interface PairSectionWidgetFormProps {
  defaultValues?: PairSectionWidgetFormValues;
  onFormSubmit: (data: PairSectionWidgetFormValues) => void;
}

export type TPage = {
  id: string;
  template: string;
  parent: string;
  index: string;
  name: string;
  title: string;
  is_draft: boolean;
  folder_exists: boolean;
};

export type TAssets = {
  id: string;
  asset_type: string;
  asset_type_name: string;
  thumbnail: string;
  thumbnail_file: null;
  name: string;
  asset_file: File;
  file_big: null;
  file_medium: null;
  file_small: null;
  description: string;
  asset_link?: string;
}[];

export type AassetFormValues = {
  name: string;
  client: string;
  document_date?: string;
  asset_link?: string;
  description?: string;
  categories?: { id: string }[];
  asset_file?: File | string;
  asset_type?: string;
  has_languages: boolean;
  asset_languages: {
    description?: string;
    language: string;
    asset_link: string;
  }[];
};

export type AassetFormProps = {
  defaultValues?: AassetFormValues;
  onFormSubmit: (data: AassetFormValues) => void;
};

export interface PostFileFormDataBody {
  [key: string]: string | Blob;
}

export interface ArticleLanguage {
  id: string;
  article: string;
  language: string;
  title: string;
  summary: string;
  page: string;
  section: string;
  // is_nofollow: boolean;
  description: string;
}

export interface IArticleFormValue {
  article_languages: ArticleLanguage[];
  name: string;
  id: string;
  client?: string | null;
  // article: number;
  // author: string;
  // categories: number[];
  // publish_date: string | null;
  // expiry_date: string | null;
  // date: string;
  // status: string;
  widgets?: string[];
  assets: TAssets[] | string[]; // Replace 'any' with appropriate type if possible
  json_article: Record<string, unknown>;
}

export interface ISectionFormValue {
  json_section: Record<string, unknown>;
  id?: string;
}

export type TSectionProps = {
  apiSection: string;
};

export type TWidgetContentAsset = {
  id: string;
  asset_type: string;
  categories: TIdAndName[];
  thumbnail: string;
  description: string;
  document_date: string;
  file: string;
  file_big: string;
  file_medium: string;
  file_small: string;
  link: string | null;
};
export type TWidgetContentText = {
  id: string;
  language: string;
  content: string;
};

export type Widget = {
  id: string;
  index: string;
  category: string;
  page: string;
  name: string;
  is_internal: boolean;
  url: string | null;
  article_categories: TIdAndName[] | null;
  article_years: number[] | null;
  asset_categories: TIdAndName[] | null;
  asset_years: number[] | null;
  widget_contents: Array<TWidgetContentAsset | TWidgetContentText>;
};

export type TResultSection = {
  id: string;
  template: number;
  page_url: string;
  menu: string;
  index: string;
  name: string;
  slug_name: string;
  widgets: never[];
  page: string | null;
  articles: {
    data: {
      article: string;
      name: string;
      article_languages: ArticleLanguage[];
      assets: {
        id: string;
        asset_type: string;
        asset_type_name: string;
        thumbnail: string;
        thumbnail_file: null;
        name: string;
        asset_file: null;
        file_big: null;
        file_medium: null;
        file_small: null;
        description: string;
        asset_link: string;
      }[];
      json_article: Record<string, unknown>;
    }[];
  }[];
  sections: {
    data: {
      json_section: Record<string, unknown>;
    }[];
  }[];
};

export type TDataSecCustomerProps = {
  results: TResultSection[];
};

export type Language = {
  id: string;
  template: string;
  page: number;
  page_name: string;
  language: number;
  language_name: string;
  name: string;
  title: string | null;
  description: string | null;
  path: string;
};

export type SectionLanguage = {
  id: string;
  section: number;
  section_name: string;
  language: number;
  language_name: string;
  name: string;
  title: string | null;
};

export type SectionWidget = {
  id: string;
  section: number;
  widget: number;
  name: string;
  index: string;
};

export type TSectionFormPageDetail = {
  id: string;
  template_name: string;
  page: number;
  page_name: string;
  category: string | null;
  category_name: string | null;
  parent: number | null;
  menu: string; // Specify the export type if known
  menu_name: string | null;
  name: string;
  index: number;
  screenshot: string | null;
  folder_path: string;
  folder_name: string;
  section_type: string;
  is_draft: boolean;
  is_dark: boolean;
  has_shortcut: boolean;
  section_languages: SectionLanguage[];
  section_widgets: SectionWidget[];
  folder_exists: boolean;
};

export type TDataPageProps = {
  id: string;
  template: number;
  template_name: string;
  parent: string; // Specify the type if known
  page_type: string;
  has_params: boolean;
  params_qty: number;
  name: string;
  index: string;
  is_draft: boolean;
  use_global_sections: boolean;
  use_page_description: boolean;
  folder_path: string;
  folder_name: string;
  page_languages: Language[];
  page_keywords: string[]; // Specify the type if known
  sections: TSectionFormPageDetail[];
};

export type SelectedItemType = {
  id: string;
  name: string;
};

// Article external

export interface ArticleLanguageEx {
  language: string;
  title: string;
  summary: string;
  page: string | null;
  section: string | null;
  path: string | null;
  content: string;
  description: string;
}

export interface IArticleDefaultFormValueEx {
  article_languages: ArticleLanguageEx[];
  name: string;
  url_type: string;
  id: string;
  client?: string;
  author?: SelectedItemType | null;
  status: SelectedItemType | null;
  date?: string;
  collections?: SelectedItemType[] | null;
  categories?: SelectedItemType[] | null;
  article_assets: IAssetBuilder[];
}
export interface IArticleSubmitFormValueEx {
  id: string;
  article_languages: ArticleLanguageEx[];
  name: string;
  url_type: string | null;
  client?: string;
  author?: string | null;
  page?: string | null;
  section?: string | null;
  status: string | null;
  date?: string;
  collections:
    | string[]
    | {
        name: string;
        id: string;
      }[]
    | null;
  categories: string[];
  article_assets?:
    | { asset?: IAssetBuilder }[]
    | (string & { asset?: IAssetBuilder })[];
}

export type IArticleFormPropsEx = {
  defaultValues?: IArticleSubmitFormValueEx;
  onFormSubmit: (data: IArticleSubmitFormValueEx) => void;
};

export type TDeleteBulkComponent = {
  deleteData?: string[];
  deleteObjectName?: string;
  deleteUrl?: string;
  getUrl?: string;
  validate: TValidate;
};

export type ArticleCategoryFormValues = {
  name: string;
  client: string;
  id?: string;

  category_languages: {
    name: string;
    language: string;
    id?: string | null | undefined;
  }[];
};

export interface ArticleCategoryFormProps {
  defaultValues?: ArticleCategoryFormValues;
  onFormSubmit: (data: ArticleCategoryFormValues) => void;
}

export type TControl<T extends FieldValues> = {
  control: Control<T>;
  errors?: FieldErrors<T>;
  setValue?: UseFormSetValue<T>;
};

export interface IAssetBuilder {
  id: string;
  file_small?: string;
  asset_file?: string;
  asset_link?: string;
  thumbnail?: string;
  asset_type: {
    id: string;
  };
  name?: string;
}

export interface WidgetBuilder {
  id: string;
  index: number;
  category: string; // Adjust as needed
  name: string;
  is_internal: boolean; // Adjust as needed
  widget_contents: WidgetContentBuilder[];
}

export type WidgetContentBuilder = {
  id: number;
  index: number;
  widgets: string;
  name: string;
  date: string;
  status: string;
  json_article: Record<string, unknown>;
  article: string;
  article_languages: ArticleLanguage[];
  assets: {
    id: string;
    asset_type: string;
    asset_type_name: string;
    thumbnail: string;
    thumbnail_file: null;
    name: string;
    has_languages: boolean;
    asset_file: null;
    file_big: null;
    file_medium: null;
    file_small: null;
    description: string;
    asset_link: string;
  }[];
};

// export type TSectionPropsExtend = {
//   control?: Control<RootObject>;
//   watch?: UseFormWatch<RootObject> | undefined;
//   setValue?: UseFormSetValue<RootObject>;
//   uniq?: string;
//   idxLang?: number;
//   blank?: boolean;
//   apiSection?: string | undefined;
//   apiMenus?: string;
//   secIndex?: number;
//   componentRef?: React.MutableRefObject<HTMLIFrameElement | undefined>;
//   entries?: EntriesData;
// };

export type TSectionPropsExtend = {
  control: Control<RootObject>;
  setValue: UseFormSetValue<RootObject>;
  menuId?: string;
  apiMenus?: string;
  secIndex?: number;
  idxContentLang: number;
  entries?: EntriesData | null;
};

export interface ArticleLanguageBuilder {
  id?: string;
  article?: string;
  language?: string;
  title: string;
  slug_title?: string;
  content?: string;
  summary?: string;
  description?: string | null;
  page?: string;
  section?: string;
  path?: string;
  json_article_language?: string;
}

export interface EntryLanguageBuilder {
  id?: string;
  entry?: string;
  language?: string;
  title: string;
  slug_title?: string;
  content?: string;
  summary?: string;
  description?: string | null;
  page?: string;
  section?: string;
  path?: string;
  json_article_language?: string;
}

export interface EntriesBuilder {
  id?: string;
  client?: string;
  index?: number;
  name?: string;
  date?: string | null;
  status?: string;
  json_entry?: Record<string, unknown>;
  widgets?: number[];
  entry?: string;
  entry_languages: EntryLanguageBuilder[];
  assets: { asset_link: string; id: string }[];
  entry_assets?: string[];
}
export interface SectionBuilder {
  slug_name: string;
  id: string;
  // client?: string;

  json_section: Record<string, unknown>;
}

export interface EntriesData {
  menu?: MenuItemFormValuesSimple;
  json_section: Record<string, unknown>;
  widgets: {
    id: number;
    widget_contents: EntriesBuilder[];
  }[];
  id: number;
  section_type: string;
}
export interface SectionData {
  data: SectionBuilder[];
}

export interface RootObject {
  id?: string;
  template?: number;
  page_url?: string;
  menu?: string;
  index?: string;
  slug_name?: string;
  widgets?: number[];
  page?: string;
  entries: EntriesData[] | null;
  delete_entries: string[] | null;
  sections: SectionData[] | null;
}

export type TemplateFormValues = {
  name: string;
  site: string;
  ga_code: string;
  id?: string;
};

export interface TemplateFormProps {
  defaultValues?: TemplateFormValues;
  onFormSubmit: (data: TemplateFormValues) => void;
}

export type ClientFormValues = {
  name: string;
  address: string;
  phone: string;
  id?: string;
};

export interface ClientFormProps {
  defaultValues?: ClientFormValues;
  onFormSubmit: (data: FormData) => void;
}

export type SiteFormValues = {
  name: string;
  api_url: string;
  site_url: string;
  favicon?: IAssetBuilder;
  id?: string;
};

export interface SiteFormProps {
  defaultValues?: SiteFormValues;
  onFormSubmit: (data: SiteFormValues) => void;
}

export type MenuItemFormValuesSimple = {
  items: {
    item_languages: {
      id: string;
      name: string;
      content: string;
      path: string | null;
      page?: string | null;
      section?: string | null;
      language: string;
    }[];
  }[];
};

export interface EntriesBuilderSingleLang {
  id: string;
  name?: string;
  date?: string | null;
  status?: string;
  json_entry?: Record<string, unknown>;
  widgets?: number[];
  entry?: string;
  entry_languages: ArticleLanguageBuilder;
  assets?: { asset_link: string; id: string }[];
  entry_assets?: string[];
}

export type MenuItemLanguage = {
  id: string;
  name: string;
  content: string;
  path: string | null;
  page?: string | null;
  section?: string | null;
  language: string;
};
// export type MenuItemFormValuesSimple = {
//   items: {
//     item_languages: MenuItemLanguage[];
//   }[];
// };

export type MenuItemLanguageMeta = {
  id: string;
  index: number;
  name: string;
  content: string;
  path: string | null;
  page?: string | null;
  section?: string | null;
  language: string;
};

export type SectionProps = {
  menuItems?: MenuItemLanguage[];
  widgets: { widget_contents: EntriesBuilder[] }[];
  slugName: string;
  jsonSection: Record<string, unknown>;
};

export interface EntriesBuilderMeta {
  id?: string;
  client?: string;
  index?: number;
  name?: string;
  date?: string | null;
  json_entry?: Record<string, unknown>;
  widgets?: number[];
  entry?: string;
  entry_languages: EntryLanguageBuilder[];
  assets: { asset_link: string; asset_languages: { language: TId }[] }[];
  entry_assets?: string[];
}
export interface WidgetMeta {
  id: number;
  index: number;
  category: string; // Adjust as needed
  name: string;
  widget_name: string;
  section_widget_name: string;
  is_internal: boolean; // Adjust as needed
  widget_contents: EntriesBuilderMeta[];
}

export interface TMetaSectionCustomer {
  name: string;
  section_type: string;
  widgets: WidgetMeta[];
  collection: { name: string }[];
  menu?: { items: { item_languages: MenuItemLanguageMeta[]; index: number }[] };
  json_section: string;
}

export interface WebStartFormValues {
  name: string;
  email: string;
  password: string;
  site_name: string;
  theme_id: string | number | null;
}
export interface WebStartFormProps {
  onFormSubmit: (data: WebStartFormValues) => void;
}

export type UserFormValues = {
  name: string;
  email: string;
  client: string;
  site: string;
  password?: string;
  confirm_password?: string;
  groups: string[];
  id?: string;
};

export interface UserFormProps {
  defaultValues?: UserFormValues;
  onFormSubmit: (data: UserFormValues) => void;
}
export type TSectionType = {
  type: "header" | "footer" | "section";
};

export type TSection = TIdAndName & {
  index: string;
  page: string;
  menu?: { id: string; name: string };
  folder_name: string;
  section_type: string;
  page_name: string;
};

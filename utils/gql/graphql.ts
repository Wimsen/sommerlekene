/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: string;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "contestants" */
export type Contestants = {
  __typename?: 'contestants';
  contestant_id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "contestants" */
export type ContestantsAggregate = {
  __typename?: 'contestants_aggregate';
  aggregate?: Maybe<ContestantsAggregateFields>;
  nodes: Array<Contestants>;
};

/** aggregate fields of "contestants" */
export type ContestantsAggregateFields = {
  __typename?: 'contestants_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ContestantsMaxFields>;
  min?: Maybe<ContestantsMinFields>;
};


/** aggregate fields of "contestants" */
export type ContestantsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ContestantsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "contestants". All fields are combined with a logical 'AND'. */
export type ContestantsBoolExp = {
  _and?: InputMaybe<Array<ContestantsBoolExp>>;
  _not?: InputMaybe<ContestantsBoolExp>;
  _or?: InputMaybe<Array<ContestantsBoolExp>>;
  contestant_id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "contestants" */
export enum ContestantsConstraint {
  /** unique or primary key constraint on columns "contestant_id" */
  ContestantsPkey = 'contestants_pkey'
}

/** input type for inserting data into table "contestants" */
export type ContestantsInsertInput = {
  contestant_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ContestantsMaxFields = {
  __typename?: 'contestants_max_fields';
  contestant_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ContestantsMinFields = {
  __typename?: 'contestants_min_fields';
  contestant_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "contestants" */
export type ContestantsMutationResponse = {
  __typename?: 'contestants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contestants>;
};

/** on_conflict condition type for table "contestants" */
export type ContestantsOnConflict = {
  constraint: ContestantsConstraint;
  update_columns?: Array<ContestantsUpdateColumn>;
  where?: InputMaybe<ContestantsBoolExp>;
};

/** Ordering options when selecting data from "contestants". */
export type ContestantsOrderBy = {
  contestant_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: contestants */
export type ContestantsPkColumnsInput = {
  contestant_id: Scalars['uuid'];
};

/** select columns of table "contestants" */
export enum ContestantsSelectColumn {
  /** column name */
  ContestantId = 'contestant_id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "contestants" */
export type ContestantsSetInput = {
  contestant_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "contestants" */
export type ContestantsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ContestantsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ContestantsStreamCursorValueInput = {
  contestant_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "contestants" */
export enum ContestantsUpdateColumn {
  /** column name */
  ContestantId = 'contestant_id',
  /** column name */
  Name = 'name'
}

export type ContestantsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ContestantsSetInput>;
  where: ContestantsBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "contestants" */
  delete_contestants?: Maybe<ContestantsMutationResponse>;
  /** delete single row from the table: "contestants" */
  delete_contestants_by_pk?: Maybe<Contestants>;
  /** insert data into the table: "contestants" */
  insert_contestants?: Maybe<ContestantsMutationResponse>;
  /** insert a single row into the table: "contestants" */
  insert_contestants_one?: Maybe<Contestants>;
  /** update data of the table: "contestants" */
  update_contestants?: Maybe<ContestantsMutationResponse>;
  /** update single row of the table: "contestants" */
  update_contestants_by_pk?: Maybe<Contestants>;
  /** update multiples rows of table: "contestants" */
  update_contestants_many?: Maybe<Array<Maybe<ContestantsMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteContestantsArgs = {
  where: ContestantsBoolExp;
};


/** mutation root */
export type MutationRootDeleteContestantsByPkArgs = {
  contestant_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertContestantsArgs = {
  objects: Array<ContestantsInsertInput>;
  on_conflict?: InputMaybe<ContestantsOnConflict>;
};


/** mutation root */
export type MutationRootInsertContestantsOneArgs = {
  object: ContestantsInsertInput;
  on_conflict?: InputMaybe<ContestantsOnConflict>;
};


/** mutation root */
export type MutationRootUpdateContestantsArgs = {
  _set?: InputMaybe<ContestantsSetInput>;
  where: ContestantsBoolExp;
};


/** mutation root */
export type MutationRootUpdateContestantsByPkArgs = {
  _set?: InputMaybe<ContestantsSetInput>;
  pk_columns: ContestantsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateContestantsManyArgs = {
  updates: Array<ContestantsUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "contestants" */
  contestants: Array<Contestants>;
  /** fetch aggregated fields from the table: "contestants" */
  contestants_aggregate: ContestantsAggregate;
  /** fetch data from the table: "contestants" using primary key columns */
  contestants_by_pk?: Maybe<Contestants>;
};


export type QueryRootContestantsArgs = {
  distinct_on?: InputMaybe<Array<ContestantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContestantsOrderBy>>;
  where?: InputMaybe<ContestantsBoolExp>;
};


export type QueryRootContestantsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ContestantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContestantsOrderBy>>;
  where?: InputMaybe<ContestantsBoolExp>;
};


export type QueryRootContestantsByPkArgs = {
  contestant_id: Scalars['uuid'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contestants" */
  contestants: Array<Contestants>;
  /** fetch aggregated fields from the table: "contestants" */
  contestants_aggregate: ContestantsAggregate;
  /** fetch data from the table: "contestants" using primary key columns */
  contestants_by_pk?: Maybe<Contestants>;
  /** fetch data from the table in a streaming manner: "contestants" */
  contestants_stream: Array<Contestants>;
};


export type SubscriptionRootContestantsArgs = {
  distinct_on?: InputMaybe<Array<ContestantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContestantsOrderBy>>;
  where?: InputMaybe<ContestantsBoolExp>;
};


export type SubscriptionRootContestantsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ContestantsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ContestantsOrderBy>>;
  where?: InputMaybe<ContestantsBoolExp>;
};


export type SubscriptionRootContestantsByPkArgs = {
  contestant_id: Scalars['uuid'];
};


export type SubscriptionRootContestantsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ContestantsStreamCursorInput>>;
  where?: InputMaybe<ContestantsBoolExp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ContestantsQueryVariables = Exact<{ [key: string]: never; }>;


export type ContestantsQuery = { __typename?: 'query_root', contestants: Array<{ __typename?: 'contestants', name: string }> };


export const ContestantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Contestants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contestants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ContestantsQuery, ContestantsQueryVariables>;
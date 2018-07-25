import * as abstractClient from '@mocoin/api-abstract-client';

import { ImplicitGrantClient, IOptions as IImplicitGrantClientOptions } from './auth/implicitGrantClient';

/**
 * factory
 * All object interfaces are here.
 * 全てのオブジェクトのインターフェースはここに含まれます。
 */
export import factory = abstractClient.factory;

export import service = abstractClient.service;
export import transporters = abstractClient.transporters;

export type IImplicitGrantClient = ImplicitGrantClient;

/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
export function createAuthInstance(options: IImplicitGrantClientOptions) {
    return new ImplicitGrantClient(options);
}

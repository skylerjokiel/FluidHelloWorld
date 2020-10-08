/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

// Some interface that we will use to define our Provider Service

declare module "@fluidframework/core-interfaces" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface IFluidObject extends Readonly<Partial<IProvideFluidRandomNumber>> { }
}

export const IFluidRandomNumber: keyof IProvideFluidRandomNumber
    = "IFluidRandomNumber";

export interface IProvideFluidRandomNumber {
    IFluidRandomNumber: IFluidRandomNumber;
}

export interface IFluidRandomNumber extends IProvideFluidRandomNumber {
    getRandomNumber(): number;
}

// The Provider itself
// Note that there is nothing collaborative about this. It's simply a class

export class RandNumberGenerator implements IFluidRandomNumber{
    public get IFluidRandomNumber() { return this; }

    /**
     * Returns a random number between 0-100
     */
    public getRandomNumber() {
        return Math.floor(Math.random()*100 + 1)
    }
}

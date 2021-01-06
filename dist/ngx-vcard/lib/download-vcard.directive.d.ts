import { ElementRef } from '@angular/core';
import { VCard } from './types/vCard';
import { VCardEncoding } from './types/vCardEncoding';
export declare class DownloadVCardDirective {
    private element;
    constructor(element: ElementRef);
    vCard: VCard;
    encoding: VCardEncoding;
    onclick(): void;
    private download;
}

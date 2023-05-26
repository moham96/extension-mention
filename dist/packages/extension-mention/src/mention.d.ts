import { Node } from '@tiptap/core';
import { DOMOutputSpec, Node as ProseMirrorNode } from '@tiptap/pm/model';
import { PluginKey } from '@tiptap/pm/state';
import { SuggestionOptions } from '@tiptap/suggestion';
export type MentionOptions = {
    HTMLAttributes: Record<string, any>;
    renderText: (props: {
        options: MentionOptions;
        node: ProseMirrorNode;
    }) => string;
    renderHTML: (props: {
        options: MentionOptions;
        node: ProseMirrorNode;
    }) => DOMOutputSpec;
    suggestion: Omit<SuggestionOptions, 'editor'>;
};
export declare const MentionPluginKey: PluginKey<any>;
export declare const Mention: Node<MentionOptions, any>;

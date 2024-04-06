export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      document: {
        Row: {
          created_at: string;
          document_title: string | null;
          id: string;
          last_modified: string | null;
          owner: string | null;
        };
        Insert: {
          created_at?: string;
          document_title?: string | null;
          id?: string;
          last_modified?: string | null;
          owner?: string | null;
        };
        Update: {
          created_at?: string;
          document_title?: string | null;
          id?: string;
          last_modified?: string | null;
          owner?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_document_owner_fkey";
            columns: ["owner"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      document_collection: {
        Row: {
          collection_name: string | null;
          created_at: string;
          document_id: string | null;
          id: string;
          owner_id: string | null;
        };
        Insert: {
          collection_name?: string | null;
          created_at?: string;
          document_id?: string | null;
          id?: string;
          owner_id?: string | null;
        };
        Update: {
          collection_name?: string | null;
          created_at?: string;
          document_id?: string | null;
          id?: string;
          owner_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_document_collection_document_id_fkey";
            columns: ["document_id"];
            isOneToOne: false;
            referencedRelation: "document";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_document_collection_owner_id_fkey";
            columns: ["owner_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      user_notes: {
        Row: {
          content: Json | null;
          created_at: string;
          docment_id: string | null;
          id: string;
          modified_at: string | null;
        };
        Insert: {
          content?: Json | null;
          created_at?: string;
          docment_id?: string | null;
          id?: string;
          modified_at?: string | null;
        };
        Update: {
          content?: Json | null;
          created_at?: string;
          docment_id?: string | null;
          id?: string;
          modified_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_user_notes_docment_id_fkey";
            columns: ["docment_id"];
            isOneToOne: false;
            referencedRelation: "document";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

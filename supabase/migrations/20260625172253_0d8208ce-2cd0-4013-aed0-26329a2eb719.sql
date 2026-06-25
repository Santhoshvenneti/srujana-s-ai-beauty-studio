
DROP POLICY "Anyone can insert chat messages" ON public.chat_messages;
CREATE POLICY "Anyone can insert chat messages"
  ON public.chat_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(session_id) BETWEEN 1 AND 100
    AND length(content) BETWEEN 1 AND 8000
  );
